// Reutilizamos la función divide del archivo anterior
function divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("No se puede dividir por cero");
    } else {
      resolve(a / b);
    }
  });
}

// Utilizando async/await podemos escribir codigo asincrono de manera mas sencilla y legible, en este caso pudiendo usar el resultado de la promesa como si fuera una variable comun.
// try/catch nos permite capturar errores dentro de lo que esta en el bloque de try.
async function calc() {
  try {
    const result = await divide(10, 2);
    console.log(result); // 5
  } catch (error) {
    console.log(error);
  }
}

calc();
