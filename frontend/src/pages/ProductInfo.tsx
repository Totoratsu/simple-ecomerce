import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import '../styles/Normalize.css';
import '../styles/App.css';
import Container from '../components/Container';
import { getCart } from '../redux/cart/reducers';
import { getProductList } from '../redux/products/reducers';
import updateCart from '../redux/cart/actions';

function ProductInfo({ cart, productsList, updateCart }: any) {

    const history = useHistory();

    function addToCart() {
        let arr = cart;
        arr.push(productsList);
        updateCart(arr, 'UPDATE_CART');
        history.push('/user/cart');
    }

    return (
        <Container cart={cart}>
            <div className="first-color padding">
                <div className="container padding">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src={productsList.photo}
                                alt={productsList.photo}
                                className="img"
                            />
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-center">{productsList.name}</h2>
                            <p className="text-justify">
                                {productsList.description}
                            </p>
                            <br />
                            <h3>${productsList.price}</h3>
                            <div className="container mt-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-8 align-self-center">
                                        <button
                                            type="button"
                                            className="btn btn-primary w-100"
                                            onClick={addToCart}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

function mapStateToProps(state: any) {
    return {
        cart: getCart(state),
        productsList: getProductList(state)
    }
}

export default connect(mapStateToProps, { updateCart })(ProductInfo);
