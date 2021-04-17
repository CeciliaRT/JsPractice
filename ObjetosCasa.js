//Funcion que usa 2 objetos para crear casas

function Casa(size,habitaciones,location,familia){
    this.size= size;
    this.habitaciones=habitaciones;
    this.location = location;
    this.familia = familia;
}

function Persona (nombre, edad, genero,parent){
    this.nombre = nombre;
    this.parentesco = parent;
    this.edad = edad;
    this.genero = genero;
}

function Coto (casa){
    this.casa=casa;
}

var Laura = new Persona ('Laura', 35, 'Mujer','Mamá');
var Juan = new Persona ('Juan', 35, 'Hombre','Papá');
var Pedro = new Persona ('Pedro', 5, 'Hombre','Hijo');
let Familia1 = [Juan,Pedro,Laura]
var Casa1 = new Casa (200,5,'Queretaro', Familia1);

var Manuel = new Persona ('Manuel', 25, 'Mujer','Roomie');
var Javier = new Persona ('Javier', 35, 'Hombre','Papa');
var Alejandra = new Persona ('Alejandra', 28, 'Hombre','Roomie');
var Lucia = new Persona ('Lucia', 15, 'Hombre','Hija');
let Familia2 = [Manuel,Javier,Alejandra,Lucia]
var Casa2 = new Casa (300,4,'Queretaro',Familia2);

let Coto1 = [Casa1,Casa2]
//var Coto1 = new Coto([Casa1,Casa2]);
console.log("Casa\n", Casa1)
console.log("Casa\n", Casa2)
console.log("Coto\n", Coto1)
