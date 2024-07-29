/* Utilicemos una promesa para poder evaluar el caso en el que b === 0, y no realizar la operacion en ese caso. */
function divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("No se puede dividir por cero");
    } else {
      resolve(a / b);
    }
  });
}

// .then() se ejecuta SOLO SI la promesa queda resuelta mediante resolve()
// .catch() se ejecuta SOLO SI la promesa queda rechazada mediante reject()

// En este caso la promesa se resuelve, por lo que se ejecuta el .then()
divide(10, 2)
  .then((result) => console.log(result)) // 5
  .catch((error) => console.log(error));

// En este caso la promesa se rechaza, por lo que se ejecuta el .catch()
divide(10, 0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); // No se puede dividir por cero
