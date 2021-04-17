//Objetos & Funciones

var animal = {
    type: 'Invertebrados',
    displayType: function(){
        console.log(this.type);
    }
}

var animal_4 = Object.create(animal);
var animal_56 = Object.create(animal);

animal_4.displayType();
animal_4.type = 'Pez';
animal_4.displayType();
animal_56.displayType();

animal_4.mamifero = true;
animal_56.color = 'cafe';

console.log("Animal4 ", animal_4);
console.log(animal_56);
console.log(animal_56.type);

