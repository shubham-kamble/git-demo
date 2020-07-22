import {RestaurantInterface} from "./RestaurantInterface";

export class Restaurant implements RestaurantInterface{
    
    name:string;
    menus:string[];

    addMenu(arr:string[]): void {
        this.menus = arr;
    }
    showMenu():string[]{
        //console.log(this.menus);
        return this.menus;
    }
    constructor(name:string){
        this.name = name;
    }
}

// interface RestaurantInterface{
//     addMenu(arr:string[]):void;
//     showMenu():string[];
// }

//admin 
// var myrest:Restaurant = new Restaurant("Res");
// myrest.addMenu(["veg","nonveg"]);

//user
// console.log(myrest.showMenu());