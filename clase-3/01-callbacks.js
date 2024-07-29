let originalValues = [1, 2, 3, 4, 5];

/* Defino el callback de forma anonima, dentro del metodo .map() */
let newValues = originalValues.map((value) => {
  return value * 2;
});

console.log(originalValues); // [1, 2, 3, 4, 5]
console.log(newValues); // [2, 4, 6, 8, 10]

/* Defino el callback de forma externa, para luego utilizarlo en el metodo .map() */
const isEven = (value) => {
  return value % 2 === 0;
};

let evenValues = originalValues.map(isEven);

console.log(evenValues); // [false, true, false, true, false]
