//Tarea 5 contar vocales

const vowels = (cadena) => {
    var n = cadena.length;
    var countVocal=0;
    var countA=0;
    var counte=0;
    var counti=0;
    var counto=0;
    var countu=0;
    var countConst=0;
    const arrVocales =['a','e','i','o','u']
    for(var i=0; i<n ; i++){
        var x = cadena.charAt(i).toLowerCase();
        //console.log('Antes '+x)
        if (arrVocales.includes(x)){
            switch (x) {
                case 'a' : countA++;
                break;
                case 'e' : counte++
                break;
                case 'i' : counti++
                break;
                case 'o' : counto++
                break;
                case 'u' : counti++
                break;
            }     
            countVocal++;  
        }     
        else
            countConst++;
    }
    return [cadena,'Vocales ' +countVocal,"a:"+countA,"e:"+ counte,"i:"+counti,"o:"+counto,"Constantes " + countConst++];
};

 console.log(vowels('Alegria'));
 console.log(vowels('Precisamente'));