//funciones de flecha
//** 
const array11 = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21]

const moduloCuatro = array11.filter(n=>n%4===0)//filter flitra los que cumplen con la condicion definida en la función flecha
console.log (moduloCuatro);

//nota: toLowerCase() includes () toUpperCase()

//=== compara que los valores sea el mismo valor y el mismo tipo

console.log(0==false)
console.log(0===false)

//Ejercicio bucar el numero menor y mayor de algunos numeros

var x = 21, y= -5, z=3;

console.log(Math.min(z,y))
console.log(Math.min(z,y,x))

console.log(Math.max(z,y))
console.log(Math.max(z,y,x))

console.log("Funcion")
//con flecha gorda
var numerosA=[21,45,-5,1]
function lookupMax (a){
    return Math.max(...a)
}
console.log(lookupMax(numerosA));

console.log(Math.max(...numerosA))

//funcion separar un array
var index = numerosA.length;
var primA = numerosA.slice(0, index/2);
var segA = numerosA.slice(index/2,index);

console.log('Original:' ,numerosA);
console.log(primA);
console.log(segA);

//
var alumnHoy = ["Armando","Ceci","Corde","Gaby","Manuel","Jose","JC"]

function divideL(lista,howMany){
    var arrayFinal = []
    input = lista.slice(0);

    while(input[0]){
        arrayFinal.push(input.splice(0,howMany));
    }
    return arrayFinal
}

console.log(divideL(alumnHoy,3))
console.log(divideL(alumnHoy,5))

//creador de numeros
function createIds(){
    var indice = 0;
    while (true) {
        yield indice++;
    }
}

var gen = createIds();

console.log(gen.next().value);
