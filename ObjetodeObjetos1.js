//Funcion que usa 2 objetos para crear objeto

function Producto(desc,marca,cantidad,precio){
    this.desc = desc;
    this.marca = marca;
    this.cantidad = cantidad;
    this.precio = precio;
}

function Cliente (nombre, edad, genero, tarjeta, status){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.tarjeta = tarjeta; //Visa o MasterCArd
    this.status = status; // Activo o Inactivo
}

var prod1 = new Producto ('Jabon','Procter&Gable', 2, 12);
var prod2 = new Producto ('Coca', 'CocaCo',1, 15);
var Juan = new Cliente ('Juan', 20, 'Hombre', 'Visa', 'Activo');
var Pedro = new Cliente ('Pedro', 55, 'Hombre', 'MasterCard', 'Activo');

function Factura(produ,client){ 
    this.produ = produ
    this.client = client
}

var Factura1 = new Factura(prod1,Juan);
var Factura2 = new Factura(prod2,Pedro);

console.log("Su Factura \n", Factura1)


console.log("Su Factura \n", Factura2)