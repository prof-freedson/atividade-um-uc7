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

//================================================================
//                      Seção: Samuel (acima)
//
//  Código relacionado à funcionalidade desenvolvida por Samuel
//================================================================


//================================================================
//                      Seção: Franklin (abaixo)
//
//  Código relacionado à funcionalidade desenvolvida por Franklin
//================================================================

// Criar um novo usuario
exports.criarLivro = (req, res) => {
  let nome, editora, num_paginas, genero, url_capa;

  if (req.is("application/xml")) {
    const dados = req.body.livro;
    nome = dados?.nome?.[0];
    editora = dados?.editora?.[0];
    num_paginas = parseInt(dados?.num_paginas?.[0]);
    genero = dados?.genero?.[0];
    url_capa = dados?.url_capa?.[0];
  } else {
    ({ nome, editora, num_paginas, genero, url_capa } = req.body);
  }

  if (!nome || !editora || !num_paginas || !genero || !url_capa) {
    return sendResponse(
      req,
      res,
      "response",
      { mensagem: "Todos os campos do livro são obrigatórios!" },
      400
    );
  }

  const novoLivro = livroModel.criarLivro({
    nome,
    editora,
    num_paginas,
    genero,
    url_capa,
  });

  return sendResponse(req, res, "livro", novoLivro, 201);
};

// Atualizar um livro
exports.atualizarLivro = (req, res) => {
  const id = parseInt(req.params.id);
  let nome, editora, num_paginas, genero, url_capa;

  if (req.is("application/xml")) {
    const dados = req.body.livro;
    nome = dados?.nome?.[0];
    editora = dados?.editora?.[0];
    num_paginas = parseInt(dados?.num_paginas?.[0]);
    genero = dados?.genero?.[0];
    url_capa = dados?.url_capa?.[0];
  } else {
    ({ nome, editora, num_paginas, genero, url_capa } = req.body);
  }

  const livroAtualizado = livroModel.atualizarLivro(id, {
    nome,
    editora,
    num_paginas,
    genero,
    url_capa,
  });

  if (!livroAtualizado) {
    return sendResponse(
      req,
      res,
      "response",
      { mensagem: "Livro não encontrado" },
      404
    );
  }

  return sendResponse(req, res, "livro", livroAtualizado);
};

// Remover um livro
exports.removerLivro = (req, res) => {
  const id = parseInt(req.params.id);
  const removido = livroModel.removerLivro(id);
  if (!removido) {
    return sendResponse(
      req,
      res,
      "response",
      { mensagem: "Livro não encontrado" },
      404
    );
  }
  return sendResponse(req, res, "response", {
    mensagem: "Livro removido com sucesso",
  });
};
