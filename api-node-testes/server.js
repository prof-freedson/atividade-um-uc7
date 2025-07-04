const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const livroRoutes = require("./routes/livroRoutes");//const livroRoutes = require("./routes/livroRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/livros", livroRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
