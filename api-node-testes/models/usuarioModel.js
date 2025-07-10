const fs = require("fs");
const path = require("path");
const js2xmlparser = require("js2xmlparser");

// Caminhos dos arquivos
const dataDir = path.join(__dirname, "../data");
const jsonPath = path.join(dataDir, "usuarios.json");
const xmlPath = path.join(dataDir, "usuarios.xml");

// Garante que a pasta data existe
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Carrega os usuários do arquivo JSON ao iniciar
let usuarios = [];
let proximoId = 1;
if (fs.existsSync(jsonPath)) {
  usuarios = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
  proximoId =
    usuarios.length > 0 ? Math.max(...usuarios.map((u) => u.id)) + 1 : 1;
}

// Função para salvar em JSON e XML
function salvarUsuariosEmArquivo() {
  try {
    fs.writeFileSync(jsonPath, JSON.stringify(usuarios, null, 2), "utf-8");
    const xml = js2xmlparser.parse("usuarios", { usuario: usuarios });
    fs.writeFileSync(xmlPath, xml, "utf-8");
  } catch (err) {
    console.error("Erro ao salvar arquivos de usuários:", err);
  }
}

// Funções CRUD
function listarUsuarios() {
  return usuarios;
}

function listarUsuarioPeloId(id) {
  return usuarios.find((u) => u.id === id);
}

function criarUsuario(nome, data_nascimento, email, telefone) {
  const novoUsuario = { id: proximoId++, nome, data_nascimento, email, telefone};
  usuarios.push(novoUsuario);
  salvarUsuariosEmArquivo();
  return novoUsuario;
}

function atualizarUsuario(id, nome, data_nascimento, email) {
  const index = usuarios.findIndex((u) => u.id === id);
  if (index === -1) return null;
  if (nome) usuarios[index].nome = nome;
  if (data_nascimento) usuarios[index].data_nascimento = data_nascimento;
  if (email) usuarios[index].email = email;
 

  salvarUsuariosEmArquivo();
  return usuarios[index];
}

function removerUsuario(id) {
  const index = usuarios.findIndex((u) => u.id === id);
  if (index === -1) return false;
  usuarios.splice(index, 1);
  salvarUsuariosEmArquivo();
  return true;
}

module.exports = {
  listarUsuarios,
  listarUsuarioPeloId,
  criarUsuario,
  atualizarUsuario,
  removerUsuario,
};
