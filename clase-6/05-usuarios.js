import express from "express";

const users = [
  { id: 1, name: "Juan", surname: "Perez", age: 30 },
  { id: 2, name: "Ana", surname: "Fernandez", age: 25 },
  { id: 3, name: "Pedro", surname: "Marti", age: 45 },
  { id: 4, name: "Luis", surname: "Gomez", age: 23 },
  { id: 5, name: "Laura", surname: "Rodriguez", age: 35 },
];

const app = express();

app.get("/", (req, res) => {
  res.send(users);
});

// Creamos una ruta que recibe un parámetro "id" en la URL, y en caso de existir devuelve el usuario correspondiente
app.get("/usuario/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ error: "Usuario no encontrado." });
  }
});

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
