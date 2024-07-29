/* Intentemos recrear el metodo .map() para entender mejor como funciona */
function customMap(array, callback) {
  let newArray = [];

  // Paso cada elemento del array original por el callback y guardo el resultado en un nuevo array
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    newArray.push(callback(current));
  }

  // Devuelvo el nuevo array, con todos los elementos modificados por el callback
  return newArray;
}

let originalValues = [1, 2, 3, 4, 5];
let newValues = customMap(originalValues, (value) => {
  return value * 3;
});

console.log(originalValues); // [1, 2, 3, 4, 5]
console.log(newValues); // [3, 6, 9, 12, 15]

/* Ahora veamos como incluir la funcion que creamos dentro del prototipo de Array, para usarla de la misma forma que .map() */
Array.prototype.customMap = function (callback) {
  let newArray = [];

  // Observar que "this" es el array sobre el cual se esta llamando al metodo customMap
  for (let i = 0; i < this.length; i++) {
    let current = this[i];
    newArray.push(callback(current));
  }

  return newArray;
};

let valuesX4 = originalValues.customMap((value) => value * 4);

console.log(valuesX4); // [4, 8, 12, 16, 20]
