import express from "express";

const app = express();

const users = [
  { id: 1, name: "Juan", surname: "Perez", age: 30, gender: "M" },
  { id: 2, name: "Ana", surname: "Fernandez", age: 25, gender: "F" },
  { id: 3, name: "Pedro", surname: "Marti", age: 45, gender: "M" },
  { id: 4, name: "Luis", surname: "Gomez", age: 23, gender: "M" },
  { id: 5, name: "Laura", surname: "Rodriguez", age: 35, gender: "F" },
];

// Lo utilizamos para poder procesar todos los caracteres de la URL, en nuestro caso para usar Queries
app.use(express.urlencoded({ extended: true }));

app.get("/usuario", (req, res) => {
  const gender = req.query.genero;
  console.log(gender);

  if (!gender) {
    return res.send({ users });
  } else if (gender != "m" && gender != "f") {
    return res.status(400).send({ error: "Género inválido." });
  }

  const filteredUsers = users.filter((user) => {
    console.log(user.gender.toLowerCase());
    return gender === user.gender.toLowerCase();
  });
  res.send({ users: filteredUsers });
});

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
