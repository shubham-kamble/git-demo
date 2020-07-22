"use strict";
exports.__esModule = true;
var Restaurant = /** @class */ (function () {
    function Restaurant(name) {
        this.name = name;
    }
    Restaurant.prototype.addMenu = function (arr) {
        this.menus = arr;
    };
    Restaurant.prototype.showMenu = function () {
        //console.log(this.menus);
        return this.menus;
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
// interface RestaurantInterface{
//     addMenu(arr:string[]):void;
//     showMenu():string[];
// }
//admin 
// var myrest:Restaurant = new Restaurant("Res");
// myrest.addMenu(["veg","nonveg"]);
//user
// console.log(myrest.showMenu());
