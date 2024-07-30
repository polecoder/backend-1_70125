import express from "express";

const app = express();

// Veamos como podemos recibir un parámetro en la URL y utilizarlo en nuestra respuesta
app.get("/usuario/:nombre", (req, res) => {
  const { nombre } = req.params;
  // Capitalizamos la primera letra del nombre
  res.send(`Bienvenido ${nombre.charAt(0).toUpperCase() + nombre.slice(1)}!`);
});

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
