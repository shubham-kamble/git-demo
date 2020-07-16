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
function numHeads(num){
    var count=0;
    for(i=0;i<num;i++)
        if(flip()=='H')
            count++;
    return count;
}
function headsRatio(num){
    return numHeads(num)/num;
}
function flip(){
    if(Math.floor(Math.random() * 10)%2 == 0)
        return 'H';
    else
        return 'T';
}
function padChars(num,str){
    if(isNaN(num))
        return "Enter valid Number";
    else
        return str.repeat(num);
}
function numRollsToGetSix(){
    var count=0;
    while((Math.floor(Math.random() * 6) + 1)!=6){
        count++;
    }
    return count;
}
if(flip()=='H')
    document.getElementById("message").innerHTML = "Have a GOOD day!";
else
    document.getElementById("message").innerHTML = "Have a BAD day!";

var fourNums = [Math.random(),Math.random(),Math.random(),Math.random()];