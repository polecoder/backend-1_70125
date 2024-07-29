/* Veamos como crear una calculadora utilizando un handler de operaciones que recibe funciones callback */

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Por convencion, el callback siempre es el ultimo parametro
function handleOperation(a, b, callback) {
  let result = callback(a, b);
  console.log(`El resultado de la operacion es: ${result}`);
}

handleOperation(10, 5, sum); // El resultado de la operacion es: 15
handleOperation(10, 5, subtract); // El resultado de la operacion es: 5
handleOperation(10, 5, multiply); // El resultado de la operacion es: 50
handleOperation(10, 5, divide); // El resultado de la operacion es: 2
