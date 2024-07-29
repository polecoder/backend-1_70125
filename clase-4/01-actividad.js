// Genera "quantity" números aleatorios y los devuelve en un array
function generateRandomNumbers(quantity) {
  const numbers = [];
  for (let i = 0; i < quantity; i++) {
    const randomNumber = Math.floor(Math.random() * 100);
    numbers.push(randomNumber);
  }
  return numbers;
}

// Cuenta cuantas veces se repite cada número en un arreglo que se recibe como parametro
function countFrequency(numbers) {
  return new Promise((resolve, reject) => {
    const frequency = {};
    numbers.forEach((number) => {
      if (frequency[number]) {
        frequency[number]++;
      } else {
        frequency[number] = 1;
      }
    });
    resolve(frequency);
  });
}

const randomNumbers = generateRandomNumbers(25);

countFrequency(randomNumbers)
  .then((frequency) => {
    console.log(frequency);
  })
  .catch((error) => {
    console.error(error);
  });
