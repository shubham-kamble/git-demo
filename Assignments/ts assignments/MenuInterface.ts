import {Restaurant} from "./RestaurantClass";

export interface MenuInterface{
    addItem(res:Restaurant,item:string):string;
}