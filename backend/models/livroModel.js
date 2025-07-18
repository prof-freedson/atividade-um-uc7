const fs = require("fs");
const path = require("path");
// const js2xmlparser = require("js2xmlparser");

// Caminhos dos arquivos
const dataDir = path.join(__dirname, "../data");
const jsonPath = path.join(dataDir, "livros.json");
// const xmlPath = path.join(dataDir, "livros.xml");

// Garante que a pasta data existe
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Carrega os usuários do arquivo JSON ao iniciar
let livros = [];
let proximoId = 1;
if (fs.existsSync(jsonPath)) {
  livros = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
  proximoId =
    livros.length > 0 ? Math.max(...livros.map((u) => u.id)) + 1 : 1;
}

// Função para salvar em JSON e XML
function salvarLivrosEmArquivo() {
  try {
    fs.writeFileSync(jsonPath, JSON.stringify(livros, null, 2), "utf-8");
    // const xml = js2xmlparser.parse("livros", { livro: livros });
    // fs.writeFileSync(xmlPath, xml, "utf-8");
  } catch (err) {
    console.error("Erro ao salvar arquivos de livros:", err);
  }
}

// Funções CRUD
function listarLivros() {
  return livros;
}

function listarLivroPeloId(id) {
  return livros.find((u) => u.id === id);
}

function criarLivro(nome, editora, num_paginas, genero, autor, url_capa) {
  const novoLivro = { id: proximoId++, nome, editora, num_paginas, genero, autor, url_capa };
  livros.push(novoLivro);
  salvarLivrosEmArquivo();
  return novoLivro;
}

function atualizarLivro(id, nome, editora, num_paginas, genero, autor, url_capa) {
  const index = livros.findIndex((u) => u.id === id);
  if (index === -1) return null;
  if (nome) livros[index].nome = nome;
  if (editora) livros[index].editora = editora;
  if (num_paginas) livros[index].num_paginas = num_paginas;
  if (genero) livros[index].genero = genero;
  if (autor) livros[index].autor = autor;
  if (url_capa) livros[index].url_capa = url_capa;
  salvarLivrosEmArquivo();
  return livros[index];
}

function removerLivro(id) {
  const index = livros.findIndex((u) => u.id === id);
  if (index === -1) return false;
  livros.splice(index, 1);
  salvarLivrosEmArquivo();
  return true;
}

module.exports = {
  listarLivros,
  listarLivroPeloId,
  criarLivro,
  atualizarLivro,
  removerLivro,
};

