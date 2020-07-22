class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width*this.height;
    }
}
rec1 = new Rectangle(10,10);
rec2 = new Rectangle(50,20);
console.log(Rectangle.prototype);
document.getElementById("para").innerHTML = Rectangle.prototype +"<br>"+ Rectangle;

let person = {fname:'virat',lname:'kohli'};
eval('person2 = {fname: "shubham", lname: "kamble", mname: "sandeep"}')
var person3 = JSON.parse('{ "fname":"MahendraSingh", "lname":"Dhoni", "mname":"PanSingh"}'); 