export interface AdminInterface{

    createRestaurant(name:string):void;
    addmenu(items:string[]):void;
    showMenu():string[];
    addItem(item:string):string;
}