import React from 'react';
import {observer} from 'mobx-react';
import styles from './createRent.module.scss'
import store from '~s/cart.js';

@observer class CreateRent extends React.Component{
    

    inputName = React.createRef();
    inputPrice = React.createRef();
    warningPrice = React.createRef();
    warningName = React.createRef();

    CreateRent = () => {
        let priceCheck = /^(\d*\.\d+)|([1-9]\d*)$/g.test(this.inputPrice.current.value );
        let nameCheck = /^[a-zA-Z0-9_ ]+\S$/g.test(this.inputName.current.value);
        console.log(priceCheck);
        if(priceCheck && nameCheck){
            store.add(this.inputName.current.value,this.selectVal.value,this.inputPrice.current.value, false, false, 0);
            this.warningPrice.current.className = "hide";
            this.warningName.current.className = "hide";
        }
        else{
            if(!priceCheck){
                this.warningPrice.current.className = "show";
            } else this.warningPrice.current.className = "hide"
            if(!nameCheck){
                this.warningName.current.className = "show";
            } else this.warningName.current.className = "hide";
        }
        
        
    }
    
    
    render  (){
        
     
        return (
        <div className={styles['outer-rental-field-container']}>
            
            <div className ={styles['rental-field-container']}>
                <div className={styles['input-container']}>
                  <label htmlFor="bikeN">Bike name</label>
                  <input type="text" id="bikeN"  placeholder="Bike name" 
                         className={styles['max-width280']} ref={this.inputName} defaultValue=""/>
                </div>
                <div className={styles['input-container']}>
                    <label htmlFor="bikeT">Bike type</label>
                    <select id="bikeT" className={styles['max-width280']} ref={(option) => this.selectVal = option}>
                        <option value="Custom">Custom</option>
                        <option value="saab">Mount</option>
                        <option value="fiat">Bmix</option>
                        <option value="audi">Street</option>
                    </select>
                </div>
                <div className={styles['last-child']}>
                  <label htmlFor="price">Price</label>
                  <input type="text" name="gender" id="price"  placeholder="Bike price" 
                         className={styles['max-width140']}  ref={this.inputPrice} defaultValue=""/>
                </div>
                <div className="btn bg-light-blue" 
                onClick={() => this.CreateRent()} >Submit rent</div>
            </div>
            <p ref={this.warningPrice} className="hide">Wrong price field type,only positive correct numbers</p>
            <p ref={this.warningName} className="hide">Wrong name field type, only [0-9],[aA-zZ],_</p>
        </div>   
        );
        
    }
}



export default CreateRent;