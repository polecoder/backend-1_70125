/* En esa clase aprenderemos como funcionan los websockets. Es como un protocolo, y la principal diferencia que tiene con el HTTP es que crea un canal de comunicacion para el intercambio de datos, cuando en HTTP una vez intercambiados los datos se elimina la comunicacion. Un ejemplo practico del uso de estos son los chats en tiempo real o los sistemas de subastas online, ambos precisan una conexion en tiempo real entre endpoints */
/* Usaremos la libreria "socket.io" que nos ayudara con establecer un protocolo websocket */
import express from "express";
import handlebars from "express-handlebars";
import { Server } from "socket.io";

const app = express();

// Guardamos el servidor HTTP en una constante, diferenciandolo del servidor socket.io que usaremos
const httpServer = app.listen(8080, () => {
  console.log("Server started at http://localhost:8080");
});

const socketServer = new Server(httpServer);

// Dejamos en modo escucha al servidor de socket.io, haciendo console.log cada vez que se conecta un nuevo cliente con el ID de la conexion (cambia cada f5)
socketServer.on("connection", (socket) => {
  console.log("New connection", socket.id);
  // Recibimos el evento "mensaje" y lo reenviamos a todos los clientes conectados. Emitiremos un evento de tipo "mensaje" del lado del cliente. Como podemos ver los eventos son nombrados por nosotros
  socket.on("mensaje", (data) => {
    console.log(`Mensaje recibido desde el cliente ${socket.id}: ${data}`);
  });

  // Envio de un mensaje para un cliente en particular
  socket.emit("mensaje", "Hola desde el servidor!");

  // Envio de un mensaje a todos los clientes conectados (menos al que envio el mensaje)
  socket.broadcast.emit(
    "mensajeGeneral",
    "Saludos a todos los clientes conectados menos al que envio el mensaje!"
  );

  // Envio de un mensaje a todos los clientes conectados
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
