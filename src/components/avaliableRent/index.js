import React from 'react';
import {observer} from 'mobx-react';
import styles from './avaliableRent.module.scss';
import store from '~s/cart.js';


@observer class AvaliableRent extends React.Component{


    render  (){
          
        let productsRows = store.products.map((product, i) => { 
            if(!product.rentflag)
            return(
                 <div className={styles['avaliable-rent-element']} key={product.b_id}>
                    <ul>
                        <li>{product.name+" / "}</li>
                        <li>{product.type + " / "}</li>
                        <li>{product.price + "$"}</li>
                    </ul>
                    <div className={styles['button-contanier']}>
                        <div className="btn bg-deep-blue" onClick={() => store.onRent(product,i)}>Rent</div>
                        <div className="btn bg-light-red" onClick={() => store.delete(product.b_id,i)}>Delete</div>
                    </div>
                </div> 
            )
        });
        
        return(
            
           <div className={styles['avaliable-rent-container']}>
              {productsRows}
            </div>
        
        )
    }
}

export default AvaliableRent