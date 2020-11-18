import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import '../styles/Normalize.css';
import '../styles/App.css';
import Container from '../components/Container';
import { getCart } from '../redux/cart/reducers';
import updateCart from '../redux/cart/actions';
import updateProductsList from '../redux/products/actions';

function Pay({ cart, updateCart, updateProductsList }: any) {

    const history = useHistory();

    return (
        <Container cart={cart}>
            <div className="first-color padding">
                <div className="container w-50">
                    <h2 className="text-center">Payment Information</h2>
                    <form className="container">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" className="form-control" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="john.doe@gmail.com" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label>Account Number</label>
                            <input type="text" className="form-control" placeholder="0000 0000 0000 0000" />
                        </div>
                        <div className="row justify-content-around">
                            <div className="col-md-8">
                                <div className="form-group">
                                    <label>Expiration Date</label>
                                    <input type="date" className="form-control" placeholder="00 / 00" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>CVV</label>
                                    <input type="text" className="form-control" placeholder="000" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 align-self-center">
                            <button
                                type="button"
                                className="btn btn-primary w-100"
                                onClick={() => {
                                    updateCart([], 'UPDATE_CART');
                                    updateProductsList({}, 'UPDATE_PRODUCT_LIST');
                                    history.push('/');
                                }}
                            >Pay</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

function mapStateToProps(state: any) {
    return {
        cart: getCart(state)
    }
}

export default connect(mapStateToProps, { updateCart, updateProductsList })(Pay);
