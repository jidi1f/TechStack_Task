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
      let input = e.target.parentNode.parentNode.children[0].children[1];
      let message = e.target.parentNode.parentNode.children[0].children[0].children[1];
      let pattern = /^(\d*\.\d+)|([1-9]\d*)$/g;
      
      if(pattern.test(input.value)){
        
        message.className = "hide";
        this.setState({active: null});
       
        if(input.value > 20) {
            store.onRent(product,i,true,input.value);
        }
        else store.onRent(product,i,false,input.value); 
        
      }
      else{
        message.className = "show red";
      } 
      
    }
   
    event = null;
    flagID = false;
    btnHandler = (product,i,e)  => {
        let message = e.target.parentNode.parentNode.children[0].children[0].children[1];
        e.persist();
        if(this.event != null) {
            this.event.target.innerHTML = 'Rent'
        };
        this.setState({ active: product.b_id});
        
        if(this.flagID === product.b_id) this.setRentTime(e,product,i)
        else message.className = 'hide';

        this.flagID = product.b_id;
        this.event = e;
        this.event.target.innerHTML = 'OK';
    }

    render  (){
        let length = 0;
        let productsRows = store.products.map((product, i) => { 
            
            if(!product.rentflag) {
                length++;
                return(
                    <div className={styles['avaliable-rent-element']} key={product.b_id}>
                        <ul>
                            <li>{product.name+" / "}</li>
                            <li>{product.type + " / "}</li>
                            <li>{product.price + "$"}</li>
                        </ul>
                        <div className={styles['functional-container']}>
                            <div className={`${styles["hide-input-container"]} ${this.state.active === product.b_id || 'hide'}`}>
                                <div className={styles["p-wrapper"]}>
                                    <p>Write your rent time (h)</p>
                                    <p className={`${styles.warning} "red"`}>only correct positive numbers!</p>
                                </div> 
                                
                                <input className={styles['hide-input']}></input>
                            </div>
                        
                            <div className={styles['btn-container']}>
                                <div className="btn bg-deep-blue" onClick={ this.btnHandler.bind(this,product,i) }>Rent</div>
                                <div className="btn bg-light-red" onClick={() => {store.delete(product.b_id,i)}} ref={this.deleteBtn}>Delete</div>
                            </div>
                        </div>
                    </div>
                    
                )
            }
        })
        
        return(
            
          <div className={styles['avaliable-rent-container']}>
             <div className="h-contanier">
                 <img src="src/img/bicycle.svg" width="25px"/>
                 <h2>Avaliable bicycles ({length})</h2>
             </div>
            
             {productsRows}
          </div>
        
        )
    }
}

export default AvaliableRent