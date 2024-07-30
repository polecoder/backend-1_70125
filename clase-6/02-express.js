// Utilizamos "import" en vez de "require" poniendo "type": "module" dentro del package.json
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Mi primer servidor en Express");
});

app.listen(8080, () => {
  console.log("Servidor escuchando en http://localhost:8080");
});

// Con esto configuramos el servidor mas basico con express.js
