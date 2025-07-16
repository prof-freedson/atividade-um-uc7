// Importa o framework Express para facilitar a criação do servidor HTTP
const express = require("express");

// Uso do pacote de roteamento do Express
const router = express.Router();

// Usando a controller através
// de uma variável / objeto
const usuarioController = require("../controllers/usuarioController");

// ===============================
// Rota inicial de um servidor
// ===============================
router.get("/", (req, res) => {
  res.send("Servidor funcionando"); // Resposta do servidor no navegador
  console.log("Rota inicial acessada"); // Resposta do servidor no terminal
});

// Rota de busca de
// todos os usuários
router.get("/usuarios", usuarioController.listarUsuarios);

// Rota de busca de
// um só usuário
router.get("/usuarios/:id", usuarioController.listarUsuarioPeloId);

// Rota de criação
// de um usuário
router.post("/usuarios", usuarioController.criarUsuario);

// Rota de atualização
// de um usuário
router.put("/usuarios/:id", usuarioController.atualizarUsuario);

// Rota de remoção
// de um usuário
router.delete("/usuarios/:id", usuarioController.removerUsuario);

// Exportando as rotas
module.exports = router;
