import React from 'react';
import {observer} from 'mobx-react';
import styles from './avaliableRent.module.scss';
import store from '~s/cart.js';


@observer class AvaliableRent extends React.Component{
    state = {
        active: null  ,
        event: null
    }

    setRentTime = (e,product,i) => {
      let input = e.target.parentNode.children[0].children[2];
      let message = e.target.parentNode.children[0].children[1];
      let pattern = /^\d+$/g;
     
      if(pattern.test(input.value)){
       
        this.setState({active: null});
        
        if(input.value > 20) {
            store.onRent(product,i,true);
        }
        else store.onRent(product,i,false); 
        
      }
      else{
        message.className = "show red";
      } 
      
    }
   
    event = null;
    flagID = false;
    btnHandler = (product,i,e)  => {
        e.persist();
        if(this.event != null) {
            this.event.target.innerHTML = 'Rent'
        };
        this.setState({ active: product.b_id});
        
        if(this.flagID === product.b_id) this.setRentTime(e,product,i)
        else e.target.parentNode.children[0].children[1].className = 'hide';

        this.flagID = product.b_id;
        this.event = e;
        this.event.target.innerHTML = 'OK';
    }

    render  (){
        
        let productsRows = store.products.map((product, i) => { 
            if(!product.rentflag) {
              
                return(
                    <div className={styles['avaliable-rent-element']} key={product.b_id}>
                        <ul>
                            <li>{product.name+" / "}</li>
                            <li>{product.type + " / "}</li>
                            <li>{product.price + "$"}</li>
                        </ul>
                        <div className={styles['button-contanier']}>
                            <div className={`${styles["hide-input-container"]} ${this.state.active === product.b_id || 'hide'}`}>
                                <p>Write your rent time</p>
                                <p className={`${styles.warning} "red"`}>Only numbers!</p>
                                <input className={styles['hide-input']}></input>
                            </div>
                            <div className="btn bg-deep-blue" onClick={ this.btnHandler.bind(this,product,i) }>Rent</div>
                            <div className="btn bg-light-red" onClick={() => {store.delete(product.b_id,i)}} ref={this.deleteBtn}>Delete</div>
                        </div>
                    </div> 
                )
            }
        });
        
        return(
            
           <div className={styles['avaliable-rent-container']}>
              {productsRows}
            </div>
        
        )
    }
}

export default AvaliableRent