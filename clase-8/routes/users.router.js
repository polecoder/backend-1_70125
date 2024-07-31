// Utilizamos la clase Router de express para modularizar
import { Router } from "express";

const usersRouter = Router();

const users = [
  { name: "Juan", surname: "Perez", age: 30 },
  { name: "Ana", surname: "Fernandez", age: 25 },
  { name: "Pedro", surname: "Marti", age: 45 },
  { name: "Luis", surname: "Gomez", age: 23 },
  { name: "Laura", surname: "Rodriguez", age: 35 },
];

// Veamos un ejemplo de middleware a nivel de router
function auth(req, res, next) {
  if (!req.user) {
    res.status(401).send("No autorizado.");
    return;
  }
  next();
}

// El parametro "auth" es el middleware que se ejecuta antes de la funcion que maneja la ruta
usersRouter.get("/", auth, (req, res) => {
  res.send({ data: users });
});

usersRouter.post("/", (req, res) => {
  if (!req.body || !req.body.name || !req.body.surname || !req.body.age) {
    res.status(400).send({ status: 400, error: "Datos incompletos." });
    return;
  }
  const { name, surname, age } = req.body;
  users.push({ name, surname, age });
  res.status(200).send("POST: Mensaje");
});

usersRouter.put("/", (req, res) => {
  res.send("PUT: Mensaje");
});

usersRouter.delete("/:name", (req, res) => {
  const { name } = req.params;
  const newUsers = users.filter(
    (user) => user.name.toLowerCase() !== name.toLowerCase()
  );
  res.send({ status: 200, message: "Usuario eliminado.", data: newUsers });
});

// Exportamos el router por defecto para poder utilizarlo en otros archivos
export default usersRouter;
