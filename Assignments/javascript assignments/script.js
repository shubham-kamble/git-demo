function parity(num){
    if(isNaN(num)){
        return "Enter Valid number";
    }
    if(num%2==0)
        return "even";
    else
        return "odd";
}
function max(num1,num2,num3){
    if(num1>num2 && num1>num3)
        return num1;
    else if(num2>num3)
        return num2;
    else
        return num3;
}