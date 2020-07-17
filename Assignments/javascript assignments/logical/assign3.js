var table = document.getElementById("myTable");
var row = 0;
var col = 0;
while(true){
    var temp = prompt("Enter Number of Rows:");
    if(isNaN(temp) || temp===undefined || temp===null || temp===""){
        alert("Please enter a valid number");
    }
    else{
        row = temp;
        break;
    }
}
while(true){
    var temp = prompt("Enter Number of Columns:");
    if(isNaN(temp) || temp===undefined || temp===null || temp===""){
        alert("Please enter a valid number");
    }
    else{
        col = temp;
        break;
    }
}
for(let i = 0; i < row ; i++){
    var newrow = table.insertRow(i);
    for (let j = 0; j < col; j++) {
        var cell = newrow.insertCell(j);
        cell.innerHTML = "R"+String(i+1)+" C"+String(j+1);
    }
}

// var cell1 = newrow.insertCell(0);
//         var cell2 = newrow.insertCell(1);
//         cell1.innerHTML = String(i)+String(j);
//         cell2.innerHTML = String(i)+String(j);