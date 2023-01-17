/*
//ejemplo funcion que retorna otra funcion
function mayorQue(n) {
  return (m) => m > n
}

let mayorQueDiez = mayorQue(10)
console.log(mayorQueDiez)
console.log( mayorQueDiez(12) )  //  true
console.log( mayorQueDiez(8) )  //  false

//ejemplo 2
function asignarOperacion(op) {
  if (op == "sumar") {
      return (a, b) => a + b
  } else if (op == "restar") {
      return (a, b) => a - b
  }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log( suma(4, 6) )  //  10
console.log( resta(5, 3) )  //  2
*/

//Recibir funciones por parámetro
function porCadaUno(arr, fn) {
  for (const el of arr) {
      fn(el)
  }
}
//caso 1
const numeros= [1, 2, 3, 4]
porCadaUno(numeros, console.log)

let total = 0

function acumular(num) {
    total += num
}
//caso 2
porCadaUno(numeros, acumular)
console.log(total) // 10

//caso 3
//Es usual definir la función directamente sobre el parámetro como una función anónima, aprovechando la sintaxis de arrow function. 
const duplicado = []

porCadaUno(numeros, (el)=> {
    duplicado.push(el * 2)
})

console.log(duplicado) // [2, 4, 6, 8]

//Métodos de búsqueda y transformación
