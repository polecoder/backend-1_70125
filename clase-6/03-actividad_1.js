import express from "express";

const app = express();

// En esta ruta vemos un ejemplo de como enviar un mensaje de bienvenida con algo de HTML
app.get("/bienvenida", (req, res) => {
  res.send(`<h1 style="color: blue;">Bienvenido al sitio!</h1>`);
});

// En esta ruta vemos un ejemplo de como enviar un objeto JSON
app.get("/usuario", (req, res) => {
  const user = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    email: "juan.perez8080@gmail.com",
  };
  res.send(user);
});

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
