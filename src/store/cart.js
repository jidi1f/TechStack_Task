import {observable, computed, action, toJS} from 'mobx';

class Bike{
    constructor(name, type, price, flag, discount) {
          this.name = name;
          this.type = type;
          this.price = price;
          this.flag = flag;
          this.discount = discount;
        }
}

class Cart{
    @observable products = [];

    // @computed get total(){
    //     return this.products.reduce((t,pr) => t + pr.price * pr.current, 0); 
    // }

    @action async onRent(obj,i,flagDiscount){
        if(flagDiscount){
            obj.discount = true;
        }
        else obj.discount = false;
        try {
            const body = obj;
            const response = await fetch(`http://localhost:5000/bikes/${obj.b_id}`,{
                method: "PUT",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            this.products[i].rentflag = !obj.rentflag;
            
        }
        catch (err){
            console.error(err.message);
        }
    }

    @action toCurRent(){

    }

    @action async add(name,type,price,flag,discount){
        let tmp = new Bike(name, type,price,flag,discount);
        try {
            const body = tmp;
            const response = await fetch("http://localhost:5000/bikes",{
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            tmp = await response.json();
            this.products.push(tmp)
            
        }
        catch (err){
            console.error(err.message);
        }
    } 

    @action async delete(id,i){
        
        try {
            const deleteResponse = await fetch(`http://localhost:5000/bikes/${id}`,{
                method: 'DELETE'
            });
            this.products.splice(i,1);
           
        }
        catch (err){
            console.error(err.message);
        }
    }

    @action async getProducts(){
        try {
            const response = await fetch("http://localhost:5000/bikes");
            let products = await response.json();
            if(products) {
                this.products = products
            }
        }
        catch (err){
            console.error(err.message);
        }
    }
}

export default new Cart()



