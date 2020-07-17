
function calc(){
    var fahrenheit = document.getElementById("temp").value;
    var degree = (fahrenheit-32)*5/9;
    document.getElementById("res").innerHTML = degree+"&#8451";
}