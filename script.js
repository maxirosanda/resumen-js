/*
//Clase 1
var varible1 = "esta es una variable con var"
let variable2 = "esta es una variable con let"
const variable3 = "esta es una variable con const"
// pueden tener valores numericos o de texto
let numerico1 = 123
let numerico2 = 244
let texto = "contiene un texto"

// Operadores basicos
let resultado = numerico1 + numerico2
console.log("la suma es: " + resultado)
resultado = numerico1 - numerico2
console.log("la resta es: " + resultado)
resultado = numerico1 * numerico2
console.log("la multiplicacion es: " + resultado)
resultado = numerico1 / numerico2
console.log("la divicion es: " + resultado)

let ingresoDato = prompt("Ingrese un numero")
alert("el dato ingresado es:" + ingresoDato)
let confirmar = confirm("desea confirmar")
if(confirmar === true){
  console.log("confirmo")
}else{
  console.log("rechazo")
}
*/
//ejemplo clase 1
/*
let numero1 = prompt("Ingrese un numero")
let numero2 = prompt("ingrese otro numero")
numero1 = parseInt(numero1)
numero2 = parseFloat(numero2)
let resultado = numero1 + numero2
console.log("el resultado es: " + resultado)
*/









//Clase 2
//------------------------------------------------------------
/*
if (true) {
	// bloque de código a ejecutar
    console.log("vas a ver este mensaje");
}

if (false){
  console.log("no vas a ver este mensaje");
}
//------------------------------------------------------------
let unNumero = 5

// Con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero == 5){
    console.log("vas a ver este mensaje");
}

// Con (unNumero == 6) comparamos si unNumero es igual a 6
if (unNumero == 6){ 
    console.log("no vas a ver este mensaje");
}
//------------------------------------------------------------
let unColor = "Rojo"

// Con (unColor == "Rojo") comparamos si unColor es igual "Rojo"
if (unColor == "Rojo"){
    console.log("el color es Rojo");
}else{
//La instrucción se interpreta cuando unColor NO es "Rojo"
    console.log("el color NO es Rojo");
}
//-------------------------------------------------------------
let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado " + nombreUsuario);
}
//--------------------------------------------------------------
let precio = 100.5;

if (precio < 20) {
    alert("El precio es menor que 20");
}
else if (precio < 50) {
    alert("El precio es menor que 50");
}
else if (precio < 100) {
    alert("El precio es menor que 100");
}
else {
    alert("El precio es mayor que 100");
}
//----------------------------------------------------------------
*/
/*
let numero   = 10;
let esValida = (numero > 5); // su valor sera true

if (esValida) {
    alert("Es boolean true");
}
*/
/*
OPERADORES LÓGICOS Y RELACIONALES

== Es igual a == b
=== Es estrictamente igual a === b
!= Es distinto a != b
!== Es estrictamente distinto a != b
<, <=, >, >= Menor, menor o igual, mayor, mayor o igual a <= b
&& Operador and (y) a && b
|| Operador or (o) a || b
! Operador not (no) !a
*/
/*
let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}
*/
/*
let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado == "ANA") || (nombreIngresado =="ana")){
    alert("El nombre ingresado es Ana"); 
}else{
    alert("El nombre ingresado NO ES Ana"); 
}
*/





