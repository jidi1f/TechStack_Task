import React from 'react';
import Cart from '~p/cart';

import {observable, computed, action} from 'mobx';

class Router{
    routes = {
        cart: () => <Cart/>,
    }

    @observable activeRoute = 'cart'

    @computed get component(){
        return this.routes[this.activeRoute]();
    }

    @action moveTo(route){
        this.activeRoute = route;
    }
}

export default new Router();