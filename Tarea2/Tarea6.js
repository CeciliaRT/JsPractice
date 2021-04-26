//Tarea 6 arreglo de numeros, dividirlos de 3 en 3 y imprimir el numero menor 
var numerosA=[21,45,-5,1,4,8,9,8,88]
const lookupMin = (a)=>{
    return Math.min(...a)
}

//funcion separar un array
var index = numerosA.length;
var t=0;
console.log (t, index/3)
console.log('Original:' ,numerosA);
for(var i=0; i<index/3; i++)
{
        var primA = numerosA.slice(t, t+3);
        console.log(primA);
        console.log('Min:' ,lookupMin(primA));
        t= t+3;
    } 
