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
// Guardo el puerto de esta forma para preparar el servidor para subirlo a la nube
const port = process.env.port || 8080;

const httpServer = app.listen(port, () => {});

let messages = [];

const socketServer = new Server(httpServer);
socketServer.on("connection", (socket) => {
  console.log("New connection", socket.id);

  // Escuchamos el evento "message", que llega con un mensaje escrito por el usuario
  socket.on("message", (data) => {
    messages.push(data);
    socketServer.emit("messageLogs", messages);
    console.log(messages);
  });
});

// Para configurar la carpeta public como carpeta de recursos estaticos
app.use(express.static("public"));

app.engine("handlebars", handlebars.engine());
app.set("views", "./views");
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});
