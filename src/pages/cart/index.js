import React from 'react';

import cartModel from '~s/cart.js';
import {observer} from 'mobx-react';
import styles from './cart.module.scss';
import RentField from "~c/createRent";
import CurrentRentField from "~c/currentRent";
import AvaliableRentField from "~c/avaliableRent";
import {routesMap} from '~/routes';
import { Link } from 'react-router-dom';

@observer class Cart extends React.Component{

  
 render  (){
    
    // let productsRows = cartModel.products.map((product, i) => {
        
    //     return (
    //         <tr key={product.id}>
    //             <td>{product.title}</td>
    //             <td>{product.price}</td>
    //             <td>
                  
    //             </td>
    //             <td>{product.price * product.current}</td>
    //             <td><button onClick={() => cartModel.delete(i)}>Delete</button></td>
    //         </tr>
    //     );
    // });
   

   

        return (
            <div className="container">
                <h2>Create new rent</h2>
                <RentField></RentField>
                <h2>Your rent</h2>
                <CurrentRentField></CurrentRentField>
                <h2>Avaliable bicycles</h2>
                <AvaliableRentField></AvaliableRentField>
            </div>
       )

}



}

function showForm(productsRows){
    return (
        <div>
              
              <h3>Create new rent</h3>
              <div></div>
              <button>Send</button>
        </div>
        )
 }

 export default Cart;