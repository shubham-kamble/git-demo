"use strict";
exports.__esModule = true;
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.addItem = function (res, item) {
        this.menu = res.showMenu();
        this.menu.push(item);
        res.addMenu(this.menu);
        return item + " added successfully";
    };
    return Menu;
}());
exports.Menu = Menu;
