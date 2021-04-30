var Calculator = {
 sum: function(number1, number2) {
    if(typeof number1 =='number' && typeof number2== 'number'){
        return number1+number2;
        } else{
            return 'Not numbers';
        }
       
    },
    division: function(number1, number2) {
        if(typeof number1 =='number' && typeof number2== 'number'){
            return number1/number2;
        } else {
            return "Not numbers";
        }
    },
    substract: function(number1, number2) {
        if(typeof number1 =='number' && typeof number2== 'number'){
            return number1-number2;
        } else {
            return "Not numbers";
        }
    }
}

module.exports = Calculator;
