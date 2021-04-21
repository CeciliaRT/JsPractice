function bubbleSort(items){
    const elementos = items.length

    for(var i = (elementos-1); i>0; i--){
        for(var j=(elementos-i); j>0; j--){
            if(items[j] < items[j-1]){
                [items[j], items[j-1] =[items[[items[j-1]], [items[j]]]
            }

        }
    }


    return items;
};

var array = [8,9,3,5,1]
console.log(bubbleSort(array))