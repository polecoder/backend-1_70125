/* La importancia de fs.promises esta en que podemos utilizar async/await para realizar operaciones de "fs" */

const fs = require("fs").promises;

async function main() {
  // fs.promises.writeFile crea un archivo de forma asincronica, con el contenido que se le pase como segundo parametro
  await fs.writeFile(
    "./data/06-fsPromises.txt",
    "Hola mundo asincronico!",
    "utf8"
  );

  // fs.promises.readFile lee un archivo de forma asincronica, y devuelve el contenido del archivo
  const result = await fs.readFile("./data/06-fsPromises.txt", "utf8");
  console.log(`El archivo asincronico contiene: ${result}`);

  // fs.promises.appendFile agrega contenido a un archivo de forma asincronica
  await fs.appendFile(
    "./data/06-fsPromises.txt",
    "\nAdios mundo asincronico!",
    "utf8"
  );
  console.log("Archivo asincronico modificado!");

  // fs.promises.unlink elimina un archivo de forma asincronica
  /* await fs.unlink("./data/06-fsPromises.txt");
  console.log("Archivo asincronico eliminado!"); */
}

main();
