//funciones dentro de funciones
operaciones ={
    holaMundo: ()=> 'Hola Mundo!',
    suma: (a,b) => a+b,
    resta : (a,b) => a -b,
    isNul: () => null,
    multiplicar: (a,b) => a*b,

    createUser:()=> {
        const name = {nombre: 'Cecilia'};
        name['Apellido']='Rojas';
        return name; // regresa nombre y apellido
    }

}

module.exports = operaciones