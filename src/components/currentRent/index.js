import React from 'react';
import {observer} from 'mobx-react';
import styles from './currentRent.module.scss'

@observer class CurrentRent extends React.Component{


    render  (){
        return(
        
           <div className={styles['current-rent-container']}>
                <div className={styles['current-rent-element']}>
                    <ul>
                        <li>Superfast /</li>
                        <li>Custom /</li>
                        <li>$12</li>
                    </ul>
                    <div className="btn bg-light-red" >cansel rent</div>
                </div> 
                <div className={styles['current-rent-element']}>
                    <ul>
                        <li>Superfast /</li>
                        <li>Custom /</li>
                        <li>$12</li>
                    </ul>
                    <div className="btn bg-light-red" >cansel rent</div>
                </div> 
            </div>
        
        )
    }
}

export default CurrentRent

