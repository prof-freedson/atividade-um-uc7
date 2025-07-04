const livroModel = require("../models/livroModel");
const js2xmlparser = require("js2xmlparser");

function aceitaXml(req) {
  return (req.headers.accept || "").toLowerCase().includes("application/xml");
}

function sendResponse(req, res, root, data, status = 200) {
  if (aceitaXml(req)) {
    return res
      .type("application/xml")
      .status(status)
      .send(js2xmlparser.parse(root, data));
  }
  return res.status(status).json(data);
}

// Listando todos os usuários
exports.listarUsuarios = (req, res) => {
  const usuarios = usuarioModel.listarUsuarios();
  if (usuarios.length === 0) {
    return sendResponse(req, res, "response", {
      mensagem: "Nenhum usuário encontrado",
    });
  }
  if (aceitaXml(req)) {
    return sendResponse(req, res, "usuarios", { usuario: usuarios });
  }
  return sendResponse(req, res, "usuarios", usuarios);
};

// Listando um só usuário
exports.listarUsuarioPeloId = (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarioModel.listarUsuarioPeloId(id);
  if (!usuario) {
    return sendResponse(
      req,
      res,
      "response",
      { mensagem: "Usuário não encontrado" },
      404
    );
  }
  return sendResponse(req, res, "usuario", usuario);
};



//   Samuel acima
//
//
//  franklin Para baixo





// Criando um usuário
exports.criarUsuario = (req, res) => {
  let nome, email;
  if (req.is("application/xml")) {
    nome = req.body.usuario?.nome?.[0];
    email = req.body.usuario?.email?.[0];
  } else {
    nome = req.body.nome;
    email = req.body.email;
  }
  if (!nome || !email) {
    return sendResponse(
      req,
      res,
      "response",
      { mensagem: "Nome e email são obrigatórios!" },
      400
    );
  }
  const novoUsuario = usuarioModel.criarUsuario(nome, email);
  return sendResponse(req, res, "usuario", novoUsuario, 201);
};

// Atualizando um usuário
exports.atualizarUsuario = (req, res) => {
  const id = parseInt(req.params.id);
  let nome, email;
  if (req.is("application/xml")) {
    nome = req.body.usuario?.nome?.[0];
    email = req.body.usuario?.email?.[0];
  } else {
    nome = req.body.nome;
    email = req.body.email;
  }
  const usuarioAtualizado = usuarioModel.atualizarUsuario(id, nome, email);
  if (!usuarioAtualizado) {
    return sendResponse(
      req,
      res,
      "response",
      { mensagem: "Usuário não encontrado" },
      404
    );
  }
  return sendResponse(req, res, "usuario", usuarioAtualizado);
};

// Removendo um usuário
exports.removerUsuario = (req, res) => {
  const id = parseInt(req.params.id);
  const removido = usuarioModel.removerUsuario(id);
  if (!removido) {
    return sendResponse(
      req,
      res,
      "response",
      { mensagem: "Usuário não encontrado" },
      404
    );
  }
  return sendResponse(req, res, "response", {
    mensagem: "Usuário removido com sucesso",
  });
};

