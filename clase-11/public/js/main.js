/* Usaremos la libreria de sweetalert2 para mandar alertas de forma facil, para cuando algun nuevo usuario se conecte. La importacion la hacemos desde el index.handlebars */
const socket = io();

let user = "";
let chatbox = document.getElementById("chatbox");

// Para entender mejor el funcionamiento de la libreria de sweetalert2, podemos ver la documentacion en https://sweetalert2.github.io/
Swal.fire({
  title: "Identificate para comenzar a chatear!",
  input: "text",
  text: "Ingresa tu username",
  inputValidator: (value) => {
    return !value && "Debes ingresar un username!";
  },
  allowOutsideClick: false,
}).then((result) => {
  if (result.isConfirmed) {
    user = result.value;
  }
});

chatbox.addEventListener("keyup", (e) => {
  // Saco los espacios en blanco del inicio y final del string y valido que no sea vacia
  if (e.key === "Enter" && chatbox.value.trim().length > 0) {
    socket.emit("message", { user, message: chatbox.value.trim() });
    chatbox.value = "";
  }
});

// Recibo desde el servidor la cadena de mensajes enviadas por los usuarios y los muestro en el chatbox del HTML
socket.on("messageLogs", (messages) => {
  let chatbox = document.getElementById("messageLogs");
  chatbox.innerHTML = "";
  messages.forEach((message) => {
    chatbox.innerHTML += `<p><b>${message.user}</b>: ${message.message}</p>`;
  });
});
