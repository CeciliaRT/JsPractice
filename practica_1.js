//Imprimir en consola

console.log('Aqui imprime una linea')

//imprimir multiple linea
console.log('linea uno \n linea dos')

//como manejar un array en Javascript 

var myarray = [];

myarray[3] =67
myarray[5]='Lap'

console.log(myarray[0]);
console.log(myarray[1]);
console.log(myarray[2]);
console.log(myarray[3]);
console.log(myarray[4]);
console.log(myarray[5]);

//Agregar Elementos
myarray.push(4)
myarray.push('test')
myarray.push(false)
myarray[3] = 'Zapato'

//imprimir todo el arreglo
console.log(myarray)

//Eliminar un elemento de un arreglo
myarray.pop()
console.log(myarray)
console.log('Push 2')
console.log(myarray.push(2))//muestra el número de entrar

console.log(myarray)
console.log('Pop')
console.log(myarray.pop())
console.log(myarray.pop())
console.log(myarray.push(true))
console.log(myarray)

//sacar un elemento al principio del arreglo
myarray.shift();
console.log(myarray)

//agregar un elemento al principio del arreglo

myarray.unshift('Clase')
console.log(myarray)

//Practica 1 - Ejercicio Resolver esto (Entregar: martes 20)
//[4,6,8,5,3]
//[3,5,8,6,4]