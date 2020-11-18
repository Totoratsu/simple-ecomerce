import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';

import '../styles/Normalize.css';
import '../styles/App.css';
import CartItem from '../components/CartItem';
import Container from '../components/Container';
import { getCart } from '../redux/cart/reducers';
import { Product } from '../types/product';

function Cart({ cart }: any) {

    function total() {
        let sum = 0;
        for (let i = 0; i < cart.length; i++)
            sum+=cart[i].price;
        return sum;
    }

    return (
        <Container cart={cart}>
            <section className="first-color padding">
                <div className="container">
                    <h3 className="text-center">Shopping Cart</h3>
                    <div className="row mt-4 mb-3">
                        <div className="col-md-3"><h4 className="text-center">Product</h4></div>
                        <div className="col"><h4 className="text-center">Quantity</h4></div>
                        <div className="col"><h4 className="text-center">Price</h4></div>
                        <div className="col"><h4 className="text-center">Total</h4></div>
                    </div>
                    {
                        cart.length > 0 ?
                            cart.map((p: Product) => {
                                return (
                                    <CartItem
                                        key={p._id}
                                        name={p.name}
                                        price={p.price}
                                        photo={p.photo}
                                    />
                                );
                            }) :
                            <p className="text-center">There isn't any product in your cart</p>
                    }
                    <h5 className="text-center mt-2">Total: ${total() || 0}</h5>
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-md-8 align-self-center">
                                <button type="button" className="btn btn-primary w-100">Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}

function mapStateToProps(state: any) {
    return {
        cart: getCart(state)
    }
}

export default connect(mapStateToProps)(Cart);