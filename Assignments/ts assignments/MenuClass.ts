import {Restaurant} from "./RestaurantClass";
import { MenuInterface } from "./MenuInterface";

export class Menu implements MenuInterface{
    menu:string[];
    addItem(res: Restaurant,item:string): string {
        this.menu = res.showMenu();
        this.menu.push(item);
        res.addMenu(this.menu);
        return item+" added successfully";
    }
    
}