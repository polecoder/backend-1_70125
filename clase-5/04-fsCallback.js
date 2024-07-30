/* Es importante observar que este ejemplo genera un "callback hell", por lo que no es muy recomendable utilizar "fs" de esta forma */

const fs = require("fs");

// fs.writeFile crea un archivo de forma asincronica, con el contenido que se le pase como segundo parametro
fs.writeFile(
  "./data/04-fsCallback.txt",
  "Hola mundo asincronico!",
  "utf8",
  (err) => {
    if (err) {
      return console.log("Error al crear archivo asincronico: ", err);
    }
    console.log("Archivo asincronico creado!");
    // fs.readFile lee un archivo de forma asincronica, y devuelve el contenido del archivo
    fs.readFile("./data/04-fsCallback.txt", "utf8", (err, res) => {
      if (err) {
        return console.log("Error al leer archivo asincronico: ", err);
      }
      console.log(`El archivo asincronico contiene: ${res}`);
      // fs.appendFile agrega contenido a un archivo de forma asincronica
      fs.appendFile(
        "./data/04-fsCallback.txt",
        "\nAdios mundo asincronico!",
        "utf8",
        (err) => {
          if (err) {
            return console.log("Error al modificar archivo asincronico: ", err);
          }
          console.log("Archivo asincronico modificado!");
          // fs.unlink elimina un archivo de forma asincronica
          /* fs.unlink("./data/04-fsCallback.txt", (err) => {
            if (err) {
              return console.log(
                "Error al eliminar archivo asincronico: ",
                err
              );
            }
            console.log("Archivo asincronico eliminado!");
          }); */
        }
      );
    });
  }
);
