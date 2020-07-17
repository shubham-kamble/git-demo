function square(num){
    return num*num;
}
function double(num){
    return num*2;
}
function composedValue(square, double, num){
    return square(double(num));
}
function compose(fun1, fun2){
    function fun3(num){
        return fun1(fun2(num));
    }
    return fun3;
}
function isEven(num){
     return(num%2 == 0); 
}
function find(array,isEven){
    for(let i = 0;i<array.length;i++){
        //console.log(array[i]);
        if(isEven(array[i])){
            //console.log("inside if");
            return array[i];
        }
    }
}
function map(array,fun){
    var resarray=[];
    for(let i = 0;i<array.length;i++){
        resarray.push(fun(array[i]));
    }
    return resarray;
}
