//
function threecompany(cadena){
    var n= cadena.length;
    var output= '';

    for(var i=0; i<n; i++){
        var letra = cadena.charAt(i);//separa letra por letra
        output = output + letra + letra + letra
    }

    return output;
};

console.log(threecompany('ty'));
console.log(threecompany('5567'));
console.log(threecompany('casa'));

//contar el numero de vocales
//input : yuritso output 3

//arreglo de numeros, dividirlos de 3 en 3 e imprimir el numero menor
//input: [765345324] output: 532

// Descubrir si una palabra es palindromo
// input: anna output : Es un palindromo
//input: casa output: No es un palindromo

