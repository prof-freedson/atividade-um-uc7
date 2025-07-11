const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const xmlparser = require("express-xml-bodyparser");
const livroRoutes = require("./routes/livroRoutes"); // Rota para livros
const usuarioRoutes = require("./routes/usuarioRoutes"); // Rota para usuários

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(xmlparser());

// Rotas
app.use("/livros", livroRoutes);     // ex: GET /livros
app.use("/usuarios", usuarioRoutes); // ex: GET /usuarios

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
