# APUNTES PARA LA CLASE DE HOY

## CRUD

CRUD es un término que hace referencia a un sistema donde se pueden realizar las siguientes operaciones con datos:

1. crear (create)
2. leer (read)
3. actualizar (update)
4. borrar (delete)

## MÁS COMANDOS DE MONGOSH

- db.nombreColeccion.drop(): borra la coleccion seleccionada
- db.dropDatabase(): borra la base de datos en la que estamos parados
- db.nombreColeccion.estimatedDocumentCount(): devuelve una cantidad estimada de documentos
- db.nombreColeccion.countDocuments({\<filtro\>}): devuelve la cantidad EXACTA de documentos (CUESTA MAS RECURSOS QUE EL ANTERIOR)

## CREANDO UNA BASE DE MASCOTAS

Veamos el paso a paso:

1. use baseCRUD
2. db.createCollection("mascotas")
3. db.mascotas.insertOne({ nombre: "Max", especie: "Perro", edad: 5 })
4. db.mascotas.insertMany([{ nombre: "Mia", especie: "Gato", edad: 3 }, { nombre: "Toby", especie: "Perro", edad: 2 }])
5. db.mascotas.find({ especie: "Perro" }) <!-- Filtramos por especie -->

## OPERADORES PARA BUSQUEDAS MAS COMPLEJAS

- $and : Realiza la operacion logica AND. { $and: [{}, {}]}
- $or : Realiza operación OR -> sintaxis: {$or: [ {},{} ] }
- $lt : Coincide con valores que son menores que un valor especificado.
- $lte : Coincide con valores menores o iguales a un valor especificado.
- $gt : Coincide con valores mayores a un valor especificado.
- $gte : Coincide con valores mayores o iguales a un valor especificado.
- $ne : Coincide con valores que no son iguales a un valor especificado.
- $eq : Selecciona los documentos que son iguales a un valor especificado.

### SORT

Veamos como ordenar un conjunto de estudiantes segun su edad:

- db.estudiantes.find().sort({edad: 1})

Esto ordena ascendentemente, mientras que usar -1 ordena descendientemente

### SKIP

Veamos como saltear algunos objetos de un conjunto de estudiantes:

- db.estudiantes.find().skip(4)

### LIMIT

Veamos como agregar un limite de objetos por consulta:

- db.estudiantes.find().limit(1)
