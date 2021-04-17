//Invertir Array
 var arreglo=[20,3,4,5,6,7,8,9,10,11,12];
 var j=arreglo.length;
 var k = arreglo.length;
console.log("Arreglo inicial\n",arreglo);

for(var i=0;i<k;i++)
{
    arreglo.push(arreglo[j-1]);
    j=j-1;

}

    for(var d=0;d<k;d++){
        arreglo.shift();
    }

console.log("Arreglo Invertido\n",arreglo);

//Invertir Array usando Reverse / el array regresa al valor inicial 
console.log("Arreglo invertido con Reverse- Regresa al valor inicial \n", arreglo.reverse());

console.log("Arreglo despues de Reverse\n",arreglo);