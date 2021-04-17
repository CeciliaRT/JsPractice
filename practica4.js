/**ciclo 
console.log("FOR")
var i=0
for (i;i<5;i++)
    console.log("Esto es un valor:", i)

//ejercicio FOR 
var arreglo = ('a','c');


for(var j=0;j<arreglo.length;j++)
{console.log("Esto es un valor:", j)}

//while

var chelas = 99;
while (chelas>0){
    console.log("aún hay "+chelas + " en el refri, sigue la fiesta")
    chelas==1
}

// Switch  - Case
var rank = "Private";
//ejercicio Case
switch(rank)
{
    case "Private" || "Sergeant":
        console.log("You are not authorized.");
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}
**/

//fibonacci
var i = 0;
var fibo = [];
fibo.push(i)
for(var j=0;j<=5;j++)
{
    fibo.push(j)
    console.log("Fibonacci:", fibo[j])
    i=fibo[j]+i
}