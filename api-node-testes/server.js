const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const xmlparser = require("express-xml-bodyparser"); // Adicione esta linha se estiver usando XML
const livroRoutes = require("./routes/livroRoutes"); // Declaração ÚNICA

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(xmlparser()); // Só inclua se realmente for usar XML

// Rotas
app.use("/", livroRoutes); // Prefixo opcional: "/api" ou "/livros"

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});