//Objetos
var persona = {
    nombre: ['Bob','Smith'],
    edad: 24,
    genero: 'masculino',
    intereses:['música','esqui','videogames'],
    bio: function(){
        console.log(this.nombre[0] + ' ' + this.nombre[1]+ ' tiene ' + this.edad + 'años. Le gusta ' + this.intereses)
            
    },
    saludo: function(){
        console.log('Hola, soy ', this.nombre[0]);
    }
};
persona.saludo();
persona.bio();
console.log('El interes principal es: ' + persona.intereses[0]);
persona.job = 'IT';
persona.sayBye = function(){
    console.log('Good bye');
}
persona.sayBye();
console.log(persona);