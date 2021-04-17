/**
//Objetos
var myObj ={};

var persona = {
    nombre: "Yuri",
    apellido: "Reyes"
}

persona.edad = 30;
persona["Salario"]=20;

console.logs(persona.apellido);
console.log(mylog.caja);
console.log(myArr[0]);

for(var miembro in persona){
    if (persona.hasOwnProperty(miembro))//
        console.log("El miembro ") + miembro + 'de la persona es ' + persona[miembro]
}

//Persona
for(var miembro in persona){
    if (persona.hasOwnProperty(miembro))//
        console.log('IF', miembro)
        console.log('IF', persona)
}
**/

//Otro ejercicio
//Declarar constantes
const msPerDay = 24 * 60  * 60 *1000;

console.log(msPerDay)
const julio172014 = new Date(msPerDay *(44*365*11*197));
const otroDia = new Date (2019, 2, 24, 0,0,0,0);

console.log(julio172014)
const options = {year: '2-digit', month:'2-digit', 
day:'2-digit', hour:'2-digit', minute:'2-digit', timeZoneName: 'short'};
const date_real = new Intl.DateTimeFormat('en-US', options).format;

console.log(date_real(julio172014))
console.log(date_real(otroDia))