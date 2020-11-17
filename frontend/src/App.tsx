import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/Normalize.css';
import './styles/App.css';
import Index from './pages/Index';
import Cart from './pages/Cart';
import Menu from './pages/Menu';

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/user/cart" exact component={Cart} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
