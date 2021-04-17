//condicionantes

var txt
var r = "Presiona el boton"

if (r == "presiona el botton!") {
    txt="test pass";
}else{
    txt="test fail";
}

console.log(txt)

//Otro ejercicio
var num2= 42; 
if(num2==42){
    console.log('El número correcto es: ', num2)
}

var foo =1
var bar =2
var moo = 3
if(foo < bar && moo > bar){
    console.log('foo is smaleer than bar And moon is larger than bar.');
}
if (foo < bar || moo > bar) {
    console.log ('foo is smaller than bar or moo is larger than bar')
}

//otro ejemplo
var boleano = false
if ( !boleano){
    console.log('Test fail')
}else{
   console.log('Test pass') 
}
