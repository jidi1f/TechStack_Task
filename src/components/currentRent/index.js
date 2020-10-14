import React from 'react';
import {observer} from 'mobx-react';
import styles from './currentRent.module.scss';
import store from  '~s/cart';

@observer class CurrentRent extends React.Component{
    

    render  (){
        let summ = 0;
        
        let productsRows = store.products.map((product, i) => { 
            let discPrice = product.price;
            if(product.discount) discPrice = (product.price/2);
            
            if(product.rentflag) {
            summ += discPrice;
            if(product.discount) discPrice =" discounted " + discPrice ;
            return(
                <div className={styles['current-rent-element']} key={product.b_id}>
                    <ul>
                        <li>{product.name+" / "}</li>
                        <li>{product.type + " / "}</li>
                        <li>{discPrice + "$"}</li>
                        <li>{product.renttime + " h"}</li>
                    </ul>
                    <div className="btn bg-light-red" onClick={() => {store.onRent(product,i,false, 0)}
                    }>cansel rent</div>
            </div> 
            )
        }});
        

        return(
        
           <div className={styles['current-rent-container']}>
                <div className="h-contanier">
                    <img src="src/img/star.svg" width="25px"/>
                    <h2>Your rent ({summ + '$'})</h2>   
                </div>
                {productsRows}

            </div>
        
        )
    }
}

export default CurrentRent

