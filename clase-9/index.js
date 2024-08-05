/* En esta clase veremos como utilizar motores de plantillas, en nuestro caso handlebars */
import express from "express";
import handlebars from "express-handlebars";

const app = express();

const users = [
  { id: "1", name: "Juan", surname: "Perez", age: 30 },
  { id: "2", name: "Ana", surname: "Fernandez", age: 25 },
  { id: "3", name: "Pedro", surname: "Marti", age: 45 },
  { id: "4", name: "Luis", surname: "Gomez", age: 23 },
  { id: "5", name: "Laura", surname: "Rodriguez", age: 35 },
];

app.engine("handlebars", handlebars.engine());
// Configurar la carpeta de donde se tomaran las plantillas
app.set("views", "./views");
// Extension de los archivos de plantillas
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const loginInfo = {
    name: "Mauro",
    role: "admin",
  };
  // Renderizar la plantilla index.handlebars con los datos que requerimos en la plantilla
  res.render("index", {
    user: loginInfo,
    isAdmin: loginInfo.role === "admin",
    users: users,
    title: "Usuarios",
  });
});

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
