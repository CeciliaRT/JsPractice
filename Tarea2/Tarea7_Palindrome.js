const { notDeepEqual } = require("assert");

//Tarea identificar si una cadena es palindrome
const palindrome = (cadena) => {
    let cad = cadena;
    var aux = cadena;
    var n = aux.length;
    var inicio =0;

while (aux.length>1)
{
    console.log(aux.length)
   if (aux.length==1) 
    {
              return [cad, 'Es palindrome'];
    }
    else
    {
        //console.log(n , "ChartA" , aux.charAt(inicio),aux.charAt(n-1), "SizeAux", aux.length)
         if (aux.charAt(inicio).toLowerCase() != aux.charAt(aux.length-1).toLowerCase())
         {
        
                 return [cad, 'No Es palindrome'];
        
         }
          else 
            {
                //console.log("SizeBefore ",aux.length, aux, aux.length-1);
                 aux= aux.substring(1, aux.length - 1);
              //  console.log("SizeSS ",aux.length, aux, aux.length>1);
                if(aux.length>1) 
                {
                   // console.log("SizeSSelse",aux.length, aux, aux.length==1);
                  //  console.log("Auxilia", aux, "Se envio recursion", n)   
                    palindrome(aux); 
                }
                else 
                { 
                  //  console.log("SizeSSIF ",aux.length, aux, aux.length>1);
                    return[cad,'Si Es palindrome'];
                      
                }
            }
    }
}
    
};

console.log(palindrome('Rotor'));
console.log(palindrome('ANA'));
console.log(palindrome('Rotar'));
console.log(palindrome('ANITA'))
//console.log(palindrome('Casa'))