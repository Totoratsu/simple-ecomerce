import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/Normalize.css';
import './styles/App.css';
import Index from './pages/Index';
import Cart from './pages/Cart';
import Menu from './pages/Menu';
import ProductInfo from './pages/ProductInfo';
import Pay from './pages/Pay';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/user/cart" exact component={Cart} />
                <Route path="/product" exact component={ProductInfo} />
                <Route path="/user/cart/pay" exact component={Pay} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
