// Tener en cuenta que "http" es un módulo nativo de Node.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Mi primer servidor en Node.js");
});

// El puerto es 8080 por convencion
server.listen(8080, () => {
  console.log("Servidor escuchando en http://localhost:8080");
});

/*
Con esto creamos un servidor que escucha en el puerto 8080 y responde con el mensaje "Mi primer servidor en Node.js" a todas las peticiones que reciba.
Entrando en http://localhost:8080 en el navegador, deberíamos ver el mensaje "Mi primer servidor en Node.js". 
*/
