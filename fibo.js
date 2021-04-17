
//fibonacci
var i = 1;
var fibo = [];

for(var j=0;j<=15;j++)
{

    if (j ==0 ) {
        fibo[j]=j;
        fibo[j+1]=i;
        i= fibo[j] + fibo [j+1];
        console.log("Fibonacci: \n", fibo[j] + '\n' + fibo[j+1])
        j=1;
    }else{
        //console.log("j", j)
        fibo[j]=fibo[j-1]+ fibo[j-2];
        i= fibo[j]+ fibo[j-1];
        console.log(fibo[j])
    } 
}