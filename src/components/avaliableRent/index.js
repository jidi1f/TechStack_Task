import React from 'react';
import {observer} from 'mobx-react';
import styles from './avaliableRent.module.scss'

@observer class AvaliableRent extends React.Component{


    render  (){
        return(
        
           <div className={styles['avaliable-rent-container']}>
                <div className={styles['avaliable-rent-element']}>
                    <ul>
                        <li>Superfast /</li>
                        <li>Custom /</li>
                        <li>$12</li>
                    </ul>
                    <div className={styles['button-contanier']}>
                        <div className="btn bg-deep-blue" >Rent</div>
                        <div className="btn bg-light-red" >Delete</div>
                    </div>
                </div> 
                <div className={styles['avaliable-rent-element']}>
                    <ul>
                        <li>Superfast /</li>
                        <li>Custom /</li>
                        <li>$12</li>
                    </ul>
                    <div className={styles['button-contanier']}>
                        <div className="btn bg-deep-blue" >Rent</div>
                        <div className="btn bg-light-red" >Delete</div>
                    </div>
                </div> 
            </div>
        
        )
    }
}

export default AvaliableRent