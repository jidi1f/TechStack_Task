import React from 'react';
import {observer} from 'mobx-react';
import RentField from "~c/createRent";
import CurrentRentField from "~c/currentRent";
import AvaliableRentField from "~c/avaliableRent";
import store from '~s/cart.js';

@observer class Cart extends React.Component{

  
 render  (){

    store.getProducts();
    
    return (
            <div className="container">
                <div className="h-contanier">
                    <img src="src/img/money.svg" width="25px"/>
                    <h2>Create new rent</h2>   
                </div>
                <RentField></RentField>
                <CurrentRentField></CurrentRentField>
                <AvaliableRentField></AvaliableRentField>
            </div>
       )

}



}

 export default Cart;