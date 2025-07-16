// Importa o framework Express para facilitar a criação do servidor HTTP
const express = require("express");

// Importa o pacote CORS para permitir requisições de outras origens
const cors = require("cors");

// Importa o pacote para interpretar XML no corpo das requisições
const xmlparser = require("express-xml-bodyparser");

// Cria uma instância da aplicação Express
const app = express();

// Ativa o middleware CORS para todas as rotas
app.use(cors()); // <-- Permite requisições de outras origens

// Define a porta em que o servidor vai rodar
const PORT = 3000;

// Adiciona um middleware para permitir que a aplicação interprete JSON no corpo das requisições
app.use(express.json());
// Adiciona um middleware para permitir que a aplicação interprete XML no corpo das requisições
app.use(xmlparser());

// Importação das rotas dos usuários
const usuarioRoutes = require("./routes/usuarioRoutes");
const livroRoutes = require("./routes/livroRoutes");

// Usando as rotas dos usuários
app.use("/", usuarioRoutes);
app.use("/", livroRoutes);

// Inicia o servidor na porta especificada e exibe uma mensagem no console
app.listen(PORT, () => {
  console.log(`Servidor funcionando`);
});

