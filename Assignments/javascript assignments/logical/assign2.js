var str = "*";
var count = 0;
for (let index = 0; count < 3; index++) {
    var temp = prompt("Enter Number");
    if(isNaN(temp) || temp===undefined || temp===null || temp===""){
        alert("Please enter a valid number");
    }
    else{
        document.getElementById('l'+String(count+1)).innerHTML = str.repeat(temp);
        count++;
    }
}
