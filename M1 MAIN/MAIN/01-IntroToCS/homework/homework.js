'use strict'

function BinarioADecimal(num) {
 //var contador = 0;
// num.reverse();
 //for (let i=0; i = num.length; i++){
   // let decimal;
    //decimal = num *2**i;
    //contador = contador + decimal[i];
 //}
 //return contador;
 let array = [];
  for(let i = num.length - 1; i>=0; i--){
    array.push(num.charAt(i));
  }
  let decimal = 0;
    for (let j = 0; j < array.length; j++){
      decimal = decimal + array[j] * Math.pow(2,j);
    }
  return decimal;

}


function DecimalABinario(num) {
  // tu codigo aca
  //var numReverse = num.reverse();
  //var binario = (num % 2).toString();
  //for (let i = 0; i < num.length; i++);
  let binary = [];
    while (num > 0) {
      let resto = num % 2;
      binary.unshift(resto);
        num = Math.floor(num/2); 
    }
        binary = binary.join("")
      return binary;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}