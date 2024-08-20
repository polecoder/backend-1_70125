# APUNTES PARA LA CLASE DE HOY

MongoDB es un sistema de bases de datos no relacionales. Estas se caracterizan por la flexibilidad a la hora de trabajar con los datos. Esto es muy útil para cuando los datos los muy cambiantes o no conocemos la naturaleza de ellos.

## CONCEPTOS IMPORTANTES

1. Base de datos: conjunto de colecciones
2. Colecciones: conjunto de documentos
3. Documentos: conjunto de objetos

## COMANDOS IMPORTANTES PARA LA CONSOLA DE MONGODB

- show dbs: muestra las bases de datos
- use nombreDB: selecciona la base de datos, si no existe la crea
- db.createCollection("nombreColeccion"): crea una coleccion en la base de datos seleccionada
- show collections: muestra las colecciones de la base de datos seleccionada
- db.nombreColeccion.insertOne({}): inserta un documento en la coleccion seleccionada
- db.nombreColeccion.find(): muestra los documentos de la coleccion seleccionada
