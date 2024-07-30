const fs = require("fs");

const fecha = new Date().toLocaleString("es-UY");

fs.writeFile("./data/05-fecha.txt", fecha, "utf8", (err) => {
  if (err) {
    return console.log("Error al crear archivo de fecha: ", err);
  }
  console.log("Archivo de fecha creado!");
  fs.readFile("./data/05-fecha.txt", "utf8", (err, res) => {
    if (err) {
      return console.log("Error al leer archivo de fecha: ", err);
    }
    console.log(`El archivo de fecha contiene: ${res}`);
  });
});
