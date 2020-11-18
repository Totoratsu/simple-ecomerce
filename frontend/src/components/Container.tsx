import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from 'react-router-dom';

import Cart from '../assets/shoppingCart.svg';
import Shop from '../assets/shop.svg';
import '../styles/Normalize.css';
import '../styles/App.css';
import '../styles/header.css'

interface Props {
    children: any;
    cart: any;
}

function Container({ cart, children }: Props) {

    const history = useHistory();

    return (
        <div>
            <header className="CommonHeader">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 align-self-center" onClick={() => history.push('/')}>
                            <img src={Shop} alt="" />
                            Shop
                        </div>
                        <div className="col-md-4 align-self-center text-center">
                            <a onClick={() => history.push('/menu')} >Menu</a>
                        </div>
                        <div className="col-md-4 align-self-center text-right" onClick={() => history.push('/user/cart')}>
                            {cart.length}
                            <img src={Cart} alt="" />
                        </div>
                    </div>
                </div>
            </header>

            {children}

            <footer className="second-color padding">
                <div className="container">
                    <h4 className="text-center">Contact Info</h4>
                    <p>Nixon Lizcano</p>
                    <ul>
                        <ol><a href="https://github.com/Totoratsu" target="blank">Github</a></ol>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Container;
