function square(num){
    return num*num;
}
function double(num){
    return num*2;
}
function isEven(num){
    return(num%2 == 0); 
}
// advanced exercises

function find2(array,isEven){
    var even = array[array.length-1];
    // console.log(array[array.length-1]);
    if(isEven(even)){
        console.log("Even Number is: "+even);
        return even;
    }
    else{
        array.splice(-1);
        return find2(array,isEven);
    }
}
var resarray=[];
function map2(array,fun){
    if(array == null || array.length==0){
        //console.log(resarray);
        return resarray;
    }
    else{
        resarray.push(fun(array.splice(0,1)));
        //console.log(resarray);
        return map2(array,fun);
    }
}
