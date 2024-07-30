import express from "express";

const app = express();

// Middleware para procesar los JSON del cliente
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
  { name: "Juan", surname: "Perez", age: 30 },
  { name: "Ana", surname: "Fernandez", age: 25 },
  { name: "Pedro", surname: "Marti", age: 45 },
  { name: "Luis", surname: "Gomez", age: 23 },
  { name: "Laura", surname: "Rodriguez", age: 35 },
];

// GET: Lo utilizamos para obtener datos del servidor
app.get("/api/users", (req, res) => {
  res.send({ data: users });
});

// POST: Lo utilizamos para enviar datos al servidor
app.post("/api/users", (req, res) => {
  if (!req.body || !req.body.name || !req.body.surname || !req.body.age) {
    res.status(400).send({ status: 400, error: "Datos incompletos." });
    return;
  }
  // Obtenemos los datos enviados por el cliente usando "req.body"
  const { name, surname, age } = req.body;
  users.push({ name, surname, age });
  res.status(200).send("POST: Mensaje");
});

// PUT: Lo utilizamos para actualizar datos en el servidor
app.put("/api/users", (req, res) => {
  res.send("PUT: Mensaje");
});

// DELETE: Lo utilizamos para eliminar datos en el servidor
app.delete("/api/users/:name", (req, res) => {
  const { name } = req.params;
  const newUsers = users.filter(
    (user) => user.name.toLowerCase() !== name.toLowerCase()
  );
  res.send({ status: 200, message: "Usuario eliminado.", data: newUsers });
});

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
