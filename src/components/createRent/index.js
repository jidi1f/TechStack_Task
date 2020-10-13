import React from 'react';
import {observer} from 'mobx-react';
import styles from './createRent.module.scss'
import store from '~s/cart.js';

@observer class CreateRent extends React.Component{
    

    inputName = React.createRef();
    inputPrice = React.createRef();
    
    

    CreateRent = () => {
        store.add(this.inputName.current.value,this.selectVal.value,this.inputPrice.current.value, false);
    }
    
    
    render  (){
        
        console.log(this.state);
        return (
            <div className ={styles['rental-field-container']}>
                <div className={styles['input-container']}>
                  <label htmlFor="bikeN">Bike name</label>
                  <input type="text" id="bikeN"  placeholder="Bike name" 
                         className={styles['max-width280']} ref={this.inputName} defaultValue=""/>
                </div>
                <div className={styles['input-container']}>
                    <label htmlFor="bikeT">Bike type</label>
                    <select id="bikeT" className={styles['max-width280']} ref={(input) => this.selectVal = input}>
                        <option value="Custom">Custom</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
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
            
        );
        
    }
}



export default CreateRent;