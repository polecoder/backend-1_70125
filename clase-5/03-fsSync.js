const fs = require("fs");

// fs.writeFileSync crea un archivo de forma sincronica, con el contenido que se le pase como segundo parametro
fs.writeFileSync("./data/03-fsSync.txt", "Hola mundo sincronico!", "utf8");
console.log("Archivo sincronico creado!");

// fs.existsSync verifica si un archivo existe, y devuelve true o false
if (fs.existsSync("./data/03-fsSync.txt")) {
  // fs.appendFileSync agrega contenido a un archivo de forma sincronica
  fs.appendFileSync(
    "./data/03-fsSync.txt",
    "\nAdios mundo sincronico!",
    "utf8"
  );
  console.log("Archivo sincronico modificado!");
}

if (fs.existsSync("./data/03-fsSync.txt")) {
  // fs.readFileSync lee un archivo de forma sincronica, y devuelve el contenido del archivo
  const data = fs.readFileSync("./data/03-fsSync.txt", "utf8");
  console.log(data);
}

// fs.unlinkSync elimina un archivo de forma sincronica
/* fs.unlinkSync("./data/03-fsSync.txt");
console.log("Archivo sincronico eliminado!"); */
