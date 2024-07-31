// El proposito de usar un router es para modularizar el codigo y separar las rutas en diferentes archivos, ya que cuando el proyecto crece, el archivo principal se vuelve muy grande y dificil de mantener.

// Ver en conjunto a este archivo todo lo incluido en la carpeta routes/

import express from "express";
// Importamos el middleware de "multer"
import uploader from "./02-multer.js";
import productsRouter from "./routes/products.router.js";
import usersRouter from "./routes/users.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Con esta linea seteamos la carpeta "public" como carpeta de recursos estaticos (HTML, CSS, JS, imagenes, etc)
app.use(express.static("public"));

// Ejemplo de middleware
app.use((req, res, next) => {
  console.log("Current time: ", Date.now());
  // Llamamos a next() para que la ejecucion continue con el siguiente middleware o con la ruta solicitada
  next();
});

// Ruta para subir archivos al servidor
app.post("/", uploader.single("customFile"), (req, res) => {
  console.log("File uploaded successfully!");
  res.send("File uploaded successfully!");
});

// Usamos todas las rutas de usersRouter en http://localhost:8080/api/users
app.use("/api/users", usersRouter);
// Usamos todas las rutas de productsRouter en http://localhost:8080/api/products
app.use("/api/products", productsRouter);

// Middleware para manejar errores (siempre va al final de todas las rutas)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
