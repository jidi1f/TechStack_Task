import React from 'react';
import {observer} from 'mobx-react';
import styles from './currentRent.module.scss';
import store from  '~s/cart';

@observer class CurrentRent extends React.Component{
    

    render  (){
        
        let productsRows = store.products.map((product, i) => { 
            console.log(product.rentflag);
            if(product.rentflag)
            return(
                <div className={styles['current-rent-element']} key={product.b_id}>
                    <ul>
                        <li>{product.name+" / "}</li>
                        <li>{product.type + " / "}</li>
                        <li>{product.price + "$"}</li>
                    </ul>
                    <div className="btn bg-light-red" onClick={() => store.onRent(product,i)}>cansel rent</div>
            </div> 
            )
        });

        return(
        
           <div className={styles['current-rent-container']}>

                   {productsRows}
               
            </div>
        
        )
    }
}

export default CurrentRent

