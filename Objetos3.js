//Objetos && Funciones

function Car(marca, modelo, color, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.modelo = color;
    this.anio = anio;
}

//console.log(Car)

var Seat = new Car('Seat','Leon','Blanco','2021');
var Mazda= new Car('Mazda','3','Negro','2019');
var Meche = new Car('Mercedes','E','Rojo','2021');
var Ferrari = new Car('Ferrari','f40','Rojo','1984');

//console.log(Seat, Mazda, Meche, Ferrari)

function Client (nombre, edad, genero, tarjeta, status){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.tarjeta = tarjeta; //Visa o MasterCArd
    this.status = status; // Activo o Inactivo
}

var maria = new Client ('Maria', 20, 'Mujer', 'Visa', 'Activo');
let fernando = new Client ('Fernando', 30, 'Hombre', 'MasterCard', 'Inactivo')

function registro(marca,modelo,anio,owner){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.owner = owner;
}

var reg_56 =  new registro('Seat','Cupra',2020, maria)

console.log('Registro: ', reg_56)