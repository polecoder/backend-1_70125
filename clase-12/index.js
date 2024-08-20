/*
La idea de esta clase es aprender como usar MongoDB como base de datos.
CONCEPTOS IMPORTANTES:
- Base de datos: conjunto de colecciones
- Colecciones: conjunto de documentos
- Documentos: conjunto de objetos

COMANDOS IMPORTANTES PARA LA CONSOLA DE MONGO:
- show dbs: muestra las bases de datos
- use nombreDB: selecciona la base de datos, si no existe la crea
- db.createCollection("nombreColeccion"): crea una coleccion en la base de datos seleccionada
- show collections: muestra las colecciones de la base de datos seleccionada
- db.nombreColeccion.insertOne({}): inserta un documento en la coleccion seleccionada
- db.nombreColeccion.find(): muestra los documentos de la coleccion seleccionada
*/
import express from "express";
import handlebars from "express-handlebars";
// __dirname en type:module
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Guardo el puerto de esta forma para preparar el servidor para subirlo a la nube
const port = process.env.port || 8080;

const httpServer = app.listen(port, () => {});

// Para configurar la carpeta public como carpeta de recursos estaticos
app.use(express.static("public"));

app.engine("handlebars", handlebars.engine());
app.set("views", "./views");
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
});
