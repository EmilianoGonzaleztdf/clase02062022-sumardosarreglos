let longitud: number = 0;
let array1: number[] = new Array(longitud);
let array2: number[] = new Array(longitud);
let arrayResultado: number[] = new Array(longitud);

function cargarLongitud(longitudlocal: number) {
  let longitudLocal: number = 0;
  longitudLocal = Number(prompt("ingrese la longitud del arreglo"));
  longitud = longitudLocal;
  console.log(
    "la longitud del arreglo asignada por el usuario es: " + longitudLocal
  );
}
function generadorNumerosRandom(): number {
  return Math.floor(Math.random() * 100);
}
function cargarArray(arrayLocal: number[], longitudLocal: number) {
  let i: number;
  for (i = 0; i < longitudLocal; i++) {
    arrayLocal[i] = generadorNumerosRandom();
  }
}
function sumarArreglos(
  arraylocal1: number[],
  arrayLocal2: number[],
  arrayResultadoLocal: number[],
  longitudlocal: number
) {
  let i: number;
  for (i = 0; i < longitudlocal; i++) {
    arrayResultadoLocal[i] = arraylocal1[i] + arrayLocal2[i];
  }
}
function mostrarArreglo(arraylocal: number[], longitudLocal: number) {
  let i: number = 0;
  let linea: string = "";
  for (i = 0; i < longitudLocal; i++) {
    linea += " " + arraylocal[i];
  }
  console.log(linea);
}
//

cargarLongitud(longitud);
console.log("los valores ingresados a los arreglos son los siguientes");
cargarArray(array1, longitud);
mostrarArreglo(array1, longitud);
cargarArray(array2, longitud);
mostrarArreglo(array2, longitud);
sumarArreglos(array1, array2, arrayResultado, longitud);
console.log("la suma de los arreglos es:");
mostrarArreglo(arrayResultado, longitud);
