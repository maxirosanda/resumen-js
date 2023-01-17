
//Clase 6
/*
// Declaraciòn de array vacío
const arrayA = [];
// Declaracion de array con nùmeros
const arrayB = [1,2];
// Declaracion de array con strings
const arrayC = ["C1","C2","C3"];
// Declaracion de array con booleanos
const arrayD = [true,false,true,false];
// Declaracion de array mixto
const arrayE = [1,false,"C4"];
console.log(arrayE)
*/
/*
//acceso a arrays
const  numeros = [1,2,3,4,5];
console.log( numeros[0] ) // 1; 
console.log( numeros[3] ) // 4; 
let resultado  = numeros[1] + numeros[2] 
console.log( resultado  ) // 5;

//reccorrido de arrays
for (let index = 0; index < 5; index++) {
    console.log(numeros[index]);
}
*/

//metodos de Arrays
const miArray = ["marca", 3 ,"palabra"];
console.log( miArray.length ); //imprime 3

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i= 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

miArray.push('otro elemento') //agregar un elemento al final
miArray.unshift('otro elemento') //agrega un elemento al principio
//miArray.pop()  // elimina ultimo elemento
//miArray.shift() //elimina primer elemento
//miArray.splice(1, 2)
console.log( miArray.join(",") ) // genera string con los elementos separado por lo que se pasa por parametros en el metodo
const gatos = ["Mishi", "Garfield", "Zuri"]
const miArray2 = miArray.concat(gatos) // une dos arrays en otro array nuevo (el nuevo aray es totalmente independiente al los anteriores)
const miArray3 = miArray.slice(1, 3); //El método slice devuelve una copia de una parte del Array dentro de un nuevo Array, empezando por el inicio hasta fin (fin no incluído). El Array original no se modificará.
console.log(miArray3)
console.log( miArray2.indexOf('marca') ) // ⇒ 0
console.log( miArray2.indexOf('Zuri') ) // ⇒ 3
console.log( miArray2.indexOf('Julieta') ) // ⇒ -1
//El método indexOf() nos permite obtener el índice de un elemento en un array. Recibe por parámetro el elemento que queremos buscar en el array y, en caso de existir, nos retorna su índice. Si el elemento no existe nos retornará como valor: -1





