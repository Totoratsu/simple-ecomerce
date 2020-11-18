import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import '../styles/Normalize.css';
import '../styles/App.css';
import Container from '../components/Container';
import { Product, GetProductsRes } from '../types/product';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../utils/api-connections';
import { getCart } from '../redux/cart/reducers';
import { getProductList } from '../redux/products/reducers';
import updateProductsList from '../redux/products/actions';


function Menu({ cart, productsList, updateProductsList }: any) {

    const history = useHistory();

    const [response, setResponse] = useState({} as GetProductsRes);

    const [products, setProducts] = useState([] as Array<Product>);

    useEffect(() => {
        if (products.length === 0)
            handleFetch();
    }, []);

    useEffect(() => {
        setProducts(response.products || []);
    }, [response]);

    async function handleFetch(e?: any) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
        }
        const res = await getProducts();
        setResponse(res);
    }

    function filterProducts(filter: string, e: any) {

        handleFetch(e);
        for (let i = 0; i < products.length; i++) {
            if (products[i].category !== filter)
                delete products[i];
        }
    }

    return (
        <Container cart={cart}>
            <section className="first-color padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 second-color padding">
                            <h3 className="text-center">Categories Filter</h3>
                            <a onClick={(e) => filterProducts('MALE', e)}>Male</a><br />
                            <a onClick={(e) => filterProducts('FEMALE', e)}>Female</a><br />
                            <a onClick={(e) => filterProducts('OTHER', e)}>Other</a><br />
                            <a onClick={handleFetch}>All Products</a>
                        </div>
                        <div className="col justify-content-around row align-items-center">
                            {
                                products.length > 0 ?
                                    products.map((p: Product) => {
                                        return (
                                            <ProductCard
                                                key={p._id}
                                                name={p.name}
                                                price={p.price}
                                                description={p.description}
                                                photo={p.photo}
                                                category={p.category}
                                                cb={() => {
                                                    updateProductsList(p,'UPDATE_PRODUCT_LIST');
                                                    history.push(`/product?id=${p._id}`);
                                                }}
                                            />
                                        )
                                    }) :
                                    <p className="text-center">There is no available products</p>
                            }
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

export default connect(mapStateToProps, { updateProductsList })(Menu);
