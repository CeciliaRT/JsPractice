var myCar = new Object(){

myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
}
console.log(myCar);

//Otra forma de declar el objeto MyCar

var MiCoche = {
    make: ' Ford',
    model: 'Mustang',
    year : 1969
};

console.log(myCar, MiCoche);

myCar.year = 1970;

console.log(myCar, MiCoche);

//console
//iteracion con una funcion

function showProp(obj,objName){
    var result = '';
    for ( var i in obj) {
     if(obj.hasOwnProperty(i)){
        result += '${objName}.${i} = ${obj[i]} \n';
    }
return result;
}

console.log(showProp(elObjeto, 'elObjeto'));
console.log(showProp(elObjeto, 'myCar'));