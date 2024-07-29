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

function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (a + b < 0) {
      reject(`El resultado es negativo: (${a + b})`);
    } else {
      resolve(a + b);
    }
  });
}

function subtract(a, b) {
  return new Promise((resolve, reject) => {
    if (a - b < 0) {
      reject(`El resultado es negativo: (${a - b})`);
    } else {
      resolve(a - b);
    }
  });
}

function multiply(a, b) {
  return new Promise((resolve, reject) => {
    if (a * b < 0) {
      reject(`El resultado es negativo: (${a * b})`);
    } else {
      resolve(a * b);
    }
  });
}

// operation es una función que recibe dos parametros y devuelve un resultado determinado
async function calc(a, b, operation) {
  try {
    const result = await operation(a, b);
    console.log(`El resultado de la operacion es: ${result}`);
  } catch (error) {
    console.log(error);
  }
}

calc(10, 2, divide); // 5
calc(10, 0, divide); // No se puede dividir por cero
calc(10, 2, sum); // 12
calc(-10, 2, sum); // El resultado es negativo: (-8)
calc(10, 2, subtract); // 8
calc(10, 20, subtract); // El resultado es negativo: (-10)
calc(10, 2, multiply); // 20
calc(-10, 2, multiply); // El resultado es negativo: (-20)
