const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livroController");

// Listar todos os livros
router.get("/livros", livroController.listarLivros);

// Listar um livro pelo ID
router.get("/livros:id", livroController.listarLivroPeloId);

// Criar um novo livro
router.post("/livros", livroController.criarLivro);

// Atualizar um livro existente
router.put("/livros:id", livroController.atualizarLivro);

// Remover um livro
router.delete("livros/:id", livroController.removerLivro);


module.exports = router;