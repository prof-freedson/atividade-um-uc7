const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livroController");

// Rota de teste
router.get("/", (req, res) => {
  res.send("Servidor funcionando");
  console.log("Rota inicial acessada");
});

// Rotas CRUD para livros
router.route("/livros")
  .get(livroController.listarLivros)       // GET /livros
  .post(livroController.criarLivro);       // POST /livros

router.route("/livros/:id")
  .get(livroController.listarLivroPeloId)  // GET /livros/:id
  .put(livroController.atualizarLivro)     // PUT /livros/:id
  .delete(livroController.removerLivro);   // DELETE /livros/:id

module.exports = router;