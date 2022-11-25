'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factors = [1];
  let x = 2;

  while(num > 1) {
    if(num % x === 0){
      factors.push(x);
      num = num/x;
    }
    else{
      x++;
    }
  }

  return factors;
}

// 9  3
// 3  3
// 1
// 9 = 1*3*3

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //[3, 5, 7, 1, 9]
  //    ^

  //aux = 5
  //swap = true

  let swap = true;

  while(swap){
    swap = false;
    for(let i = 0; i < array.length - 1; i++){
      if(array[i] > array[i + 1]){
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        swap = true;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    // First, choose the element at index 1
    let current = array[i];
    let j;

    // Loop from right to left, starting from i-1 to index 0
    for (j = i - 1; j >= 0 && array[j] > current; j--) {
      // as long as arr[j] is bigger than current
      // move arr[j] to the right at arr[j + 1]
      var aux = array [j + 1];
      array[j + 1] = array[j];
      array[j] = aux;

    }
  }
  return array;
  

}
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  //    [3, 5, 7, 9, 1]
  //           i
  //     j

  //aux = 3

  for(let i = 1; i < array.length; i++){
    let j = i - 1;
    let aux = array[i];

    while(j >= 0 && aux < array[j]){
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }

  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var min;
  var posicion;
  var arrayFinal = [];
  while (array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      min = array[i];
      if (array[i] < array[i + 1]) {
        min = array[i];
        posicion = i;
      }
    }
    arrayFinal.push(min);
    array.splice(posicion, 1);
  }
  return arrayFinal;
}
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  //   [1, 3, 5, 7, 9]
  //                i
  //                   j

  //min = 3
  //aux = 7

  for(let i = 0; i < array.length; i++){
    let min = i;

    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[min]){
        min = j;
      }
    }
    if(i !== min){
      let aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }

  }
  
  return array;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
