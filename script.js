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










// Clase 3
/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    console.log(ingresarNumero +" X "+ i +" = "+ resultado);
}

for (let i = 1; i <= 2; i++) {
  // En cada repetición solicitamos un nombre.
  let ingresarNombre = prompt("Ingresar nombre");
  // Informamos el turno asignado usando el número de repetición (i).
  console.log(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}

for (let i = 1; i <= 10; i++) {
  //Si la variable i es igual 5 interrumpo el for. 
  if(i == 5){
      break;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  //Si la variable i es 5, no se interpreta la repetición
  if(i == 5){
      continue;
  }
  console.log(i);
}
*/
/*
let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}

let repetir = false;
do{
console.log("¡Solo una vez!");
}while(repetir)


let numero = 0;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero));
*/
/*
let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}
*/








//Clase 4
/*
function saludar() {
  console.log("¡Hola estudiantes!");
}
saludar();

function solicitarNombre(){
  let nombreIngresado   = prompt("Ingresar nombre")
  alert("El nombre ingresado es " + nombreIngresado)
} 
solicitarNombre();
*/
/*
function conParametros(parametro1, parametro2) {
  console.log(parametro1 + " " + parametro2);
}
conParametros("Hola", "Coder"); // -> “Hola Coder”
conParametros("Cursando", "JS"); // -> “Cursando JS”
*/
/*
//Declaración de variable para guardar el resultado de la suma
let resultado = 0;
//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}
//Función que muestra resultado por consola
function mostrar(mensaje) {
    console.log(mensaje)
}
//Llamamos primero a sumar y luego a mostrar
sumar(6, 3);            
mostrar(resultado); 
*/
/*
function sumar(primerNumero, segundoNumero) {
  return primerNumero + segundoNumero;
}
let resultado = sumar(5, 8);
console.log(resultado)  // ⇒ 13
*/
/*
function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
      case "+":
          return primerNumero + segundoNumero;
          break;
      case "-":
          return primerNumero - segundoNumero;
          break;
      case "*":
          return primerNumero * segundoNumero;
          break;
      case "/":
          return primerNumero / segundoNumero;
          break;
      default:
          return 0;
          break;
  }
}
console.log(calculadora(10, 5, "/"));
*/
/*
let nombre = "John Doe" // variable global

function saludar() {
    let nombre = "Juan Coder" // variable local
    console.log(nombre)
}
//Accede a nombre global
console.log(nombre)   // → “John Doe”

//Accede a nombre local
saludar() // → “Juan Coder”
*/
/*
//FUNCIONES ANONIMAS
const suma  = function (a, b) { return a + b }
const resta = function (a, b) { return a - b }
console.log( suma(15,20) )
console.log( resta(15,5) )
*/

// FUNCION FLECHA 
/*
const suma  = (a, b) => { return a + b }
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) =>  a - b ;
console.log( suma(15,20) )
console.log( resta(20,5) )
*/
/*
const suma  = (a,b) => a + b
const resta = (a,b) => a - b
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21
let precioProducto  = 500
let descuento = 50 
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
console.log(nuevoPrecio)
*/






// Clase 5
/*
let nombre = "Homero";
let edad   = 39;
let calle  = "Av. Siempreviva 742";
// Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" }
console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.calle)
console.log(persona1["nombre"])
console.log(persona1["edad"])
console.log(persona1["calle"])
persona1["nombre"] = "Marge"
persona1.edad = 36
console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.calle)
*/
/*
function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad 	 = edad;
  this.calle  = calle;
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
*/
/*
function Persona(literal) {
  this.nombre = literal.nombre;
  this.edad   = literal.edad;
  this.calle  = literal.calle;
}
const persona1 = new Persona({ nombre: "Homero", edad: 39, calle: "Av.Siempreviva 742" });
*/
/*
// Métodos en objetos JS
let cadena = "HOLA CODER";
//Propiedad de objeto String: Largo de la cadena.
console.log(cadena.length);
//Método de objeto String: Pasar a minúscula.
console.log(cadena.toLowerCase());
//Método de objeto String: Pasar a mayúscula.
console.log(cadena.toUpperCase());
// Metodos
function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad   = edad;
  this.calle  = calle;
  this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();

//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}
*/
//clases en js
/*
class Persona{
  constructor(nombre, edad, calle) {
      this.nombre = nombre;
      this.edad   = edad;
      this.calle  = calle;
  }
  hablar(){
      console.log("HOLA SOY "+ this.nombre);
  }
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
persona1.hablar();

class Producto {
  constructor(nombre, precio) {
      this.nombre  = nombre.toUpperCase();
      this.precio  = parseFloat(precio);
      this.vendido = false;
  }
  sumaIva() {
      this.precio = this.precio * 1.21;
  }
  vender() {
      this.vendido = true;
  }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();
console.log(producto1.vendido)
console.log(producto1.precio)
console.log(producto2.precio)
*/