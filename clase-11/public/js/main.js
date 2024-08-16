console.log("Hola desde el chat!");

const socket = io();
/* Usaremos la libreria de sweetalert2 para mandar alertas de forma facil, para cuando algun nuevo usuario se conecte. La importacion la hacemos desde el index.handlebars */

let users = [];
let chatbox = document.getElementById("chatbox");

// Alerta basica con sweetalert2
Swal.fire({
  title: "Bienvenido al chat!",
  text: "Texto de prueba",
  icon: "success",
});
