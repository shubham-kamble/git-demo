class person{
    constructor(fname,lname,age,skills,dateofbirth,address,married,profession){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.skills=skills;
        this.dateofbirth=dateofbirth;
        this.address=address;
        this.married=married;
        this.profession=profession;
        }
}
person1=new person("nikhil","goud",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst");
person2=new person("harish","chinna",21,"HTML","08/06/1997",{city:"Ameerpet",pincode:"500038"},"false","jr analyst");

print=function()
{
console.log(person1);
console.log(person2);
}();

var amithab=new person("amithab","bachan",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst");
var abhisheik=new person("abhisheik",21,"HTML","08/06/1997","false","jr analyst");
//var abhisheik=Object.create(amithab);
print=function()
{
console.log(amithab);
console.log(abhisheik.lname);
console.log(abhisheik.address);
}();

var aradhya=Object.create(abhisheik);
//var aaradhya = _.pick(abhisheik, ['lname', 'address']);
aradhya.fname = "aradhya";
print=function()
{
console.log(aradhya.fname+aradhya.lname);
}();

class BankAccount{
    constructor(accNo,accHolderName,accbal){
        this.accNo= accNo;
        this.accHolderName = accHolderName;
        this.accbal = accbal;
    }
    setbal(bal){
        this.accbal = bal;
    }
}
class Savings extends BankAccount{
    constructor(accNo,accHolderName,accbal,isSalary){
        super(accNo,accHolderName,accbal);
        this.isSalary = isSalary;
    }
    withdraw(amount){
        // console.log(this.accbal - amount);
        if((this.accbal - amount)>0){
            super.setbal(this.accbal - amount);
            return this.accbal;
        }
        else
            return "Sorry minimum bal is required "+this.accbal;
    }
}
class Current extends BankAccount{
    constructor(accNo,accHolderName,accbal,odLimit){
        super(accNo,accHolderName,accbal);
        this.odLimit = odLimit;
    }
    withdraw(amount){
        // console.log(this.accbal - amount);
        if((this.accbal - amount)>=this.odLimit){
            super.setbal(this.accbal - amount);
            return this.accbal;
        }
        else
            return "Sorry minimum bal cannot go below odlimit "+this.odLimit;
    }
}