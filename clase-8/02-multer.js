// Usamos "multer" para subir archivos al servidor. Multer es un middleware de Express que facilita la carga de archivos.

import multer from "multer";
// Las siguientes cuatro lineas son necesarias para obtener el valor de __dirname en un archivo de tipo module
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __dirname + "/public/img");
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploader = multer({ storage });

export default uploader;
