const fs = require("fs");
const path = require("path");
const js2xmlparser = require("js2xmlparser");


const dataDir = path.join(__dirname, "../data");
const jsonPath = path.join(dataDir, "usuarios.json");
const xmlPath = path.join(dataDir, "usuarios.xml");


if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}


let usuarios = [];
let proximoId = 1;
if (fs.existsSync(jsonPath)) {
  usuarios = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
  proximoId =
    usuarios.length > 0 ? Math.max(...usuarios.map((u) => u.id)) + 1 : 1;
}


function salvarUsuariosEmArquivo() {
  try {
    fs.writeFileSync(jsonPath, JSON.stringify(usuarios, null, 2), "utf-8");
    const xml = js2xmlparser.parse("usuarios", { usuario: usuarios });
    fs.writeFileSync(xmlPath, xml, "utf-8");
  } catch (err) {
    console.error("Erro ao salvar arquivos de usuários:", err);
  }
}

function listarUsuarios() {
  return usuarios;
}

function listarUsuarioPeloId(id) {
  return usuarios.find((u) => u.id === id);
}

function criarUsuario(nome, data_nascimento, email, telefone, cidade, estado, url_imagem) {
  const novoUsuario = { id: proximoId++, nome, data_nascimento, email, telefone, cidade, estado, url_imagem};
  usuarios.push(novoUsuario);
  salvarUsuariosEmArquivo();
  return novoUsuario;
}


function atualizarUsuario(id, nome, data_nascimento, email, telefone, cidade, estado, url_imagem) {
  const index = usuarios.findIndex((u) => u.id === id);
  if (index === -1) return null;
  if (nome) usuarios[index].nome = nome;
  if (data_nascimento) usuarios[index].data_nascimento = data_nascimento;
  if (email) usuarios[index].email = email;
  if (telefone) usuarios[index].telefone = telefone;
  if (cidade) usuarios[index].cidade = cidade;
  if (estado) usuarios[index].estado = estado;
  if (url_imagem) usuarios[index].url_imagem = url_imagem;
 

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
