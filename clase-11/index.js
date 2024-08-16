/* La idea de esta clase es aprender a hacer una aplicacion de chat con websockets */
import express from "express";
// Instalamos express-handlebars en la version 6.0.7 porque la ultima genera errores al subir al servidor
import handlebars from "express-handlebars";
import { Server } from "socket.io";
// __dirname en type:module
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const httpServer = app.listen(8080, () => {
  console.log("Server started at http://localhost:8080");
});

const socketServer = new Server(httpServer);

socketServer.on("connection", (socket) => {
  console.log("New connection", socket.id);
  socket.on("mensaje", (data) => {
    console.log(`Mensaje recibido desde el cliente ${socket.id}: ${data}`);
  });

  socket.emit("mensaje", "Hola desde el servidor!");

  socket.broadcast.emit(
    "mensajeGeneral",
    "Saludos a todos los clientes conectados menos al que envio el mensaje!"
  );

  socketServer.emit(
    "mensajeGeneral",
    "Este mensaje es global y lo reciben todos los clientes conectados!"
  );
});

// Para configurar la carpeta public como carpeta de recursos estaticos
app.use(express.static("public"));

app.engine("handlebars", handlebars.engine());
app.set("views", "./views");
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});
