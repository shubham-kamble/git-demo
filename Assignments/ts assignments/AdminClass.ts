import {AdminInterface} from "./AdminInterface";
import {Restaurant} from "./RestaurantClass";
import { RestaurantInterface } from "./RestaurantInterface";
import { Menu } from "./MenuClass";

class AdminClass implements AdminInterface{
    
    rest:Restaurant;
    
    createRestaurant(name: string): void {
        this.rest= new Restaurant(name);
        console.log("Restaurant "+name+" created successfully!");
    }
    addmenu(items: string[]): void {
        this.rest.addMenu(items);
    }
    showMenu():string[]{
        return this.rest.showMenu();
    }
    addItem(item:string):string{
        var menu:Menu = new Menu();
        return menu.addItem(this.rest,item);
    }

}

var adm:AdminClass = new AdminClass();
adm.createRestaurant("abc rest");
adm.addmenu(['veg-biryani','pulav']);
console.log(adm.showMenu());
console.log(adm.addItem("paneer cisaidad"));
console.log(adm.showMenu());