console.log("Iniciando tarea asincrónica...");

setTimeout(() => {
  console.log("Esto se ejecuta después de 3 segundos.");
}, 3000);

console.log("Finalizando tarea asincrónica...");

/*
OUTPUT:
Iniciando tarea asincrónica...
Finalizando tarea asincrónica...
Esto se ejecuta después de 3 segundos.
*/
