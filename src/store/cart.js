import {observable, computed, action} from 'mobx';
import { create } from 'domain';

class Bike{
    constructor(name, type, price) {
          this.name = name;
          this.type = type;
          this.price = price;
        }
}

class Cart{
    @observable products = [];

    @computed get total(){
        return this.products.reduce((t,pr) => t + pr.price * pr.current, 0); 
    }

    @action change(i,cnt){
        this.products[i].current = cnt;
    }

    @action add(name,type,price){
        let tmp = new Bike(name,type,price)
        this.products.push(tmp);
    } 

    @action delete(i){
        this.products.splice(i,1);
    }
}

export default new Cart()



function getProduct(){
    return [
        {
            id: 100,
            title: 'Iphone 200',
            price: 12000,
            rest: 10,
            current: 1
        }
        ,
        {
            id: 101,
            title: 'Samsung AAZ8',
            price: 22000,
            rest: 5,
            current: 1
        }
    ]
}