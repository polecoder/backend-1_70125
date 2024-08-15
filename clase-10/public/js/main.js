// Inicializamos socket.io
const socket = io();

// Enviamos un mensaje al servidor
socket.emit("mensaje", "Hola desde el cliente!");

// Recibimos el evento "mensaje" del servidor y lo mostramos en consola
socket.on("mensaje", (data) => {
  console.log(data);
});

// Recibimos el evento "mensajeGeneral" del servidor y lo mostramos en consola
socket.on("mensajeGeneral", (data) => {
  console.log(data);
});
