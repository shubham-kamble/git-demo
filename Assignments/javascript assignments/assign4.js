function calc(){
    var stop = false;
    while(true){
        var operation = prompt("1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exponent\n6. Mean\n7. Quit");
        console.log(operation);
        if((parseInt(operation)>8 || parseInt(operation)<0)){
            alert("enter valid input");
        }
        else{
            switch((parseInt(operation))){
                case 1:
                    var num1 = prompt("enter num1");
                    var num2 = prompt("enter num2");
                    //document.getElementById("res").innerHTML = parseInt(num1)+parseInt(num2);
                    alert(parseInt(num1)+parseInt(num2));
                    break;
                case 2:
                    var num1 = prompt("enter num1");
                    var num2 = prompt("enter num2");
                    //document.getElementById("res").innerHTML = parseInt(num1)+parseInt(num2);
                    alert(parseInt(num1)-parseInt(num2));
                    break;
                case 3:
                    var num1 = prompt("enter num1");
                    var num2 = prompt("enter num2");
                    //document.getElementById("res").innerHTML = parseInt(num1)+parseInt(num2);
                    alert(parseInt(num1)*parseInt(num2));
                    break;
                case 4:
                    var num1 = prompt("enter num1");
                    var num2 = prompt("enter num2");
                    //document.getElementById("res").innerHTML = parseInt(num1)+parseInt(num2);
                    alert(parseInt(num1)/parseInt(num2));
                    break;
                case 5:
                    var num1 = prompt("enter num1");
                    var num2 = prompt("enter num2");
                    //document.getElementById("res").innerHTML = parseInt(num1)+parseInt(num2);
                    alert(Math.pow(parseInt(num1),parseInt(num2)));
                    break;
                case 6:
                    var mean = 0;
                    var count = 0;
                    while(true){
                        var num = prompt("enter a number");
                        if(num==="***" || isNaN(num))
                            break;
                        else{
                            mean = parseInt(mean) + parseInt(num);
                            count++;
                        }
                    }
                    alert(parseInt(mean)/parseInt(count));
                    break;
                case 7:
                    stop = true;
                    break;
            }
        }
        if(stop || operation===null)
            break;
    }
}