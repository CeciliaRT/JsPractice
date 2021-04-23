//Tarea contar las vocales
function vocales(cadena){
    var n = cadena.length;
    var countVocal=0;
    var countConst=0;
    for(var i=0; i<n ; i++){
        var x = cadena.charAt(i).toLowerCase();
        if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u')
            countVocal++;
        else
            countConst++;
    }
    return [countVocal,countConst++];
};
console.log('Vocales y Consonantes ' + vocales('tyes'))
console.log('Vocales y Consonantes ' + vocales('YUIRSHI'))
console.log('Vocales y Consonantes ' + vocales('casa'))
function letter_indexof(cadena) {
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
console.log('Vocales y Consonantes ' + letter_indexof('tyes'))
console.log('Vocales y Consonantes ' + letter_indexof('YUIRSHI'))
console.log('Vocales y Consonantes ' + letter_indexof('casa'))