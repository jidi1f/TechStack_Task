import React from 'react';

import cartModel from '~s/cart.js';
import {observer} from 'mobx-react';
import styles from './cart.module.scss';

import {routesMap} from '~/routes';
import { Link } from 'react-router-dom';

@observer class Cart extends React.Component{


 render  (){
    
    let productsRows = cartModel.products.map((product, i) => {
        
        return (
            <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  
                </td>
                <td>{product.price * product.current}</td>
                <td><button onClick={() => cartModel.delete(i)}>Delete</button></td>
            </tr>
        );
    });
   

   

        return (
            <div className="container">
                
                {showForm(productsRows)}
                
                <hr/>
                 {/* <Link to={routesMap.order} className="btn btn-primary">Send</Link> */}
            </div>
       )

}



}

function showForm(productsRows){
    return (
        <div>
              
              <h2>Cart</h2>
              <table className="table table-bordered">
                 <thead>   
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Count</td>
                        <td>Total</td>
                    </tr>
                  </thead>
                  <tbody>
                  {productsRows}
                 </tbody>
                
              </table>
              {cartModel.total}
              <br/>
              <button>Send</button>
        </div>
        )
 }

 export default Cart;