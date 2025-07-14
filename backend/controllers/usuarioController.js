const usuarioModel = require("../models/usuarioModel");
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

// Listar todos os usuarios
exports.listarUsuarios = (req, res) => {
  const usuarios = usuarioModel.listarUsuarios();
  if (Usuario.length === 0) {
    return sendResponse(req, res, "response", {
      mensagem: "Nenhum usuário encontrado",
    });
  }
  return sendResponse(req, res, "usuarios", { usuario: usuarios });
};

// Listar um usuario pelo ID
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

// Criar um novo usuario
exports.criarUsuario = (req, res) => {
  let nome, data_nascimento, email, telefone, cidade, estado, url_imagem;

  if (req.is("application/xml")) {
    const dados = req.body.usuario;
    nome = dados?.nome?.[0];
    data_nascimento = dados?.data_nascimento?.[0];
    email = dados?.email?.[0];
    telefone = dados?.telefone?.[0];
    cidade = dados?.cidade?.[0];
    estado = dados?.estado?.[0];
    url_imagem = dados?.url_imagem?.[0];
  } else {
    ({ nome, data_nascimento, email, telefone, cidade, estado, url_imagem} = req.body);           
  }

  if (!nome || !data_nascimento|| !email || !telefone|| !cidade || !estado || !url_imagem) {
    return sendResponse(
      req,
      res,
      "response",
      { mensagem: "Todos os campos do usuário são obrigatórios!" },
      400
    );
  }

  const novoUsuario = usuarioModel.criarUsuario({
    nome,
    data_nascimento,
    email,
    telefone,
    cidade,
    estado,
    url_imagem,
  });

  return sendResponse(req, res, "usuario", novoUsuario, 201);
};

// Atualizar um usuario
exports.atualizarUsuario = (req, res) => {
  const id = parseInt(req.params.id);
  let nome, data_nascimento, email, telefone, cidade, estado, url_imagem;

  if (req.is("application/xml")) {
    const dados = req.body.usuario;
    nome = dados?.nome?.[0];
    data_nascimento = dados?.data_nascimento?.[0];
    email = dados?.email?.[0];
    telefone = dados?.telefone?.[0];
    cidade = dados?.cidade?.[0];
    estado = dados?.estado?.[0];
    url_imagem = dados?.url_imagem?.[0];
  } else {
    ({ nome, data_nascimento, email, telefone, cidade, estado, url_imagem } = req.body);
  }

  const usuarioAtualizado = usuarioModel.atualizarUsuario(id, {
    nome,
    data_nascimento,
    email,
    telefone,
    cidade,
    estado,
    url_imagem,
  });

  if (!usuarioAtualizado) {
    return sendResponse(
      req,
      res,
      "response",
      { mensagem: "Usuario não encontrado" },
      404
    );
  }

  return sendResponse(req, res, "usuario", usuarioAtualizado);
};

// Remover um usuario
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
    mensagem: "Usuario removido com sucesso",
  });
};
