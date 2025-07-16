// Importa o framework Express para facilitar a criação do servidor HTTP
const express = require("express");

// Uso do pacote de roteamento do Express
const router = express.Router();

// Usando a controller através
// de uma variável / objeto
const livroController = require("../controllers/livroController");

// ===============================
// Rota inicial de um servidor
// ===============================
router.get("/", (req, res) => {
  res.send("Servidor funcionando"); // Resposta do servidor no navegador
  console.log("Rota inicial acessada"); // Resposta do servidor no terminal
});

// Rota de busca de
// todos os livros
router.get("/livros", livroController.listarLivros);

// Rota de busca de
// um só livro
router.get("/livros/:id", livroController.listarLivroPeloId);

// Rota de criação
// de um livro
router.post("/livros", livroController.criarLivro);

// Rota de atualização
// de um livro
router.put("/livros/:id", livroController.atualizarLivro);

// Rota de remoção
// de um livro
router.delete("/livros/:id", livroController.removerLivro);

// Exportando as rotas
module.exports = router;
