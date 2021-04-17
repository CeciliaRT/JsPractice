//Objetos y funciones
function displayCar(){
    var impresion = `Un coche ${this.year} ${this.modelo} a la ventana, dueña ${this.owner.nombre}`
        console.log(impresion)
}

function carrito(marca,modelo,year, owner){
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
    this.owner = owner;
    this.displayCar = displayCar;//funcion anidada
}

function cliente (nombre, edad, genero, tarjeta, status){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.tarjeta = tarjeta; //Visa o MasterCArd
    this.status = status; // Activo o Inactivo
}

var maria = new cliente ('Maria', 20, 'Mujer', 'Visa', 'Activo');

var reg_56 =  new carrito('Seat','Cupra',2020, maria)

reg_56.displayCar();
console.log(reg_56.owner.edad)
