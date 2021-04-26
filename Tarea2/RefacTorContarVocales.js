//Tarea contar las vocales refactorizada con Funciones Flecha

const vocales = (cadena) => {
    var n = cadena.length;
    var countVocal=0;
    var countConst=0;
    var arrVocales =['a','e','i','o','u']
    for(var i=0; i<n ; i++){
        var x = cadena.charAt(i).toLowerCase();
        //console.log('Antes '+x)
        if (arrVocales.includes(x))
            countVocal++; 
        else
            countConst++;
    }
    return [countVocal,countConst++];
};

console.log('Vocales y Consonantes ' + vocales('Algunos'))
console.log('Vocales y Consonantes ' + vocales('Rapidamente'))
console.log('Vocales y Consonantes ' + vocales('tres'))

//Segunda con función flecha

const letter_indexof=(cadena) => {
    var n = cadena.length;
    var vocales = ["a","e","i","o","u"]; 
    var countVocal=0;
    var countConst=0;
    for(var i=0; i<n ; i++){
        if (vocales.indexOf(cadena.charAt(i).toLowerCase()) >= 0)
            countVocal++;
        else
            countConst++;
    }
    return [countVocal,countConst++];
}
console.log('Segunda Función')
console.log('Vocales y Consonantes ' + letter_indexof('Algunos'))
console.log('Vocales y Consonantes ' + letter_indexof('Rapidamente'))
console.log('Vocales y Consonantes ' + letter_indexof('tres'))
