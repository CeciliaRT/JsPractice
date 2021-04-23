//functione flecha 
/** 
function hi(nombre){
    return "Hola " + nombre + "!"

}

console.log(hi("C"))

const hiFlecha = (name) => { 
    return "Hola " + name + "!";
}
console.log(hiFlecha("Ceci"));

//funcion suma
var suma = function(x,y){
    return x+y;
};

//function suma de flecha
const suma2 = (x,y)=> { return x+y; };

const suma3 = (x,y) => x+y;//si es una sola línea no necesita llaves, tampoco lleva return

console. log(suma(2,3));
console. log(suma2(2,3));
console. log(suma3(2,3));

//cuadrado

var cuadrado = function (x){
    return x*x;
}

const cuadrado2 = (x)=> {return x*x};

const cuadrado3 = (x)=> x*x;

console.log(cuadrado(4));
console.log(cuadrado2(4));
console.log(cuadrado3(4));
*/
//función para manejar /imprimir los caracteres de un array de palabras
var palabras =[
    'arbol','palabritas','Juan','Trabucles','Armados', 'Cecilia','Gabriel'
];

var contarLetras = palabras.map(s => s.length)
console.log(contarLetras);

//Tradicional
var contarLetales_trad = palabras.map(function(s){
    return s.length
});

//Funcion Multiplicar numeros de un array

var numeros = [1,2,3,4,5]
/**function multiplicarNumeros(n){
    return n * 2;
}
console.log (multiplicarNumeros(3));
let losnumeros = numeros.map(multiplicarNumeros)
*/
// llamar funcion sin parametro usando MAP
const multiplicarF= param => param*2;
let multiplicarNumeros = numeros.map(multiplicarF);
console.log(multiplicarNumeros);





