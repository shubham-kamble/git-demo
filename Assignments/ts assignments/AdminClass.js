"use strict";
exports.__esModule = true;
var RestaurantClass_1 = require("./RestaurantClass");
var MenuClass_1 = require("./MenuClass");
var AdminClass = /** @class */ (function () {
    function AdminClass() {
    }
    AdminClass.prototype.createRestaurant = function (name) {
        this.rest = new RestaurantClass_1.Restaurant(name);
        console.log("Restaurant " + name + " created successfully!");
    };
    AdminClass.prototype.addmenu = function (items) {
        this.rest.addMenu(items);
    };
    AdminClass.prototype.showMenu = function () {
        return this.rest.showMenu();
    };
    AdminClass.prototype.addItem = function (item) {
        var menu = new MenuClass_1.Menu();
        return menu.addItem(this.rest, item);
    };
    return AdminClass;
}());
var adm = new AdminClass();
adm.createRestaurant("abc rest");
adm.addmenu(['veg-biryani', 'pulav']);
console.log(adm.showMenu());
console.log(adm.addItem("paneer cisaidad"));
console.log(adm.showMenu());
