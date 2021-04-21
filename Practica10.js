// Objetos con Const 

//Objetos
const Manager = {
    name: 'Guillermo',
    company: 'Telefonica',
    age:32,
    job: 'Software Engineer'
}
let Manager2Level = {
    name: 'Guillermina',
    company: 'Telefonica',
    age:30,
    job: 'Software Engineer'
}
var Empleado_private = {
    name: 'Paca',
    age:25,
    job:'Reception y donas'
}
const Interno = {
    name: 'Francsisco',
    age:21,
    job:'Ir por el café a Starbucks y saca copias'
}
function sayHello(){
    console.log('Hello... this is me: ', this.name)
}
function myAge(){
    console.log("what's my age again? ", this.age, 'years old');
}
Manager.sayHello = sayHello;
Interno.sayHello = sayHello;
Manager.myAge = myAge;
Interno.myAge = myAge;
Manager.salary = 3000000;
Manager2Level.schedule = 'flexible';
console.log('Manger: ', Manager);
console.log('Manger2Level: ', Manager2Level);
console.log('Empleado_private: ',Empleado_private);
Manager.sayHello();
Manager.myAge();
console.log('Interno: ', Interno)
Interno.sayHello();
Interno.myAge();