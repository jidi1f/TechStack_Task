import React from 'react';
import {observer} from 'mobx-react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from '~/routes';
import styles from './app.module.scss';

 @observer class App extends React.Component{
    
    render  (){
       let routesComponents = routes.map((route) => {
          return <Route path={route.url}
                        component={route.component}
                        exact ={route.exact}
                        key={route.url}
          />;
       })
     return (
        <Router>
         <div className='.outer-container'>
            <div className='.contanier'>
               <h1>Awesome Bike Rental</h1>
                  <Switch>
                     {routesComponents}
                  </Switch>
            </div>
         </div> 
      </Router>
      )
    };

       
}

export default App;
