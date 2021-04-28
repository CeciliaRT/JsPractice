const operaciones = require('./operaciones');
test ('validar hola mundo',() => {
    expect(operaciones.holaMundo()).toBe('Hola Mundo!');
});

//Tarea 10 probar cada una de las funciones en el archivo Operaciones TDD