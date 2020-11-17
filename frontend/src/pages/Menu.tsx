import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/Normalize.css';
import '../styles/App.css';
import CartItem from '../components/CartItem';
import Container from '../components/Container';
import { Product, GetProductsRes } from '../types/product';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../utils/api-connections';


function Menu() {

    const [response, setResponse] = useState({} as GetProductsRes);

    let items: string[] = [];
    const [products, setProducts] = useState([] as Array<Product>);


    useEffect(() => {
        if (products.length === 0)
            handleFetch();
    }, []);

    useEffect(() => {
        setProducts(response.products || []);
    }, [response]);

    async function handleFetch(e?: any) {
        if(e){
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
        }
        const res = await getProducts();
        console.log(res);
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
        <Container items={items}>
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
                        <div className="col justify-content-around row">
                            {
                                products.length > 0 ?
                                    products.map((p: Product, i: any) => {
                                        return (
                                            <ProductCard
                                                key={i}
                                                name={p.name}
                                                price={p.price}
                                                description={p.description}
                                                photo={p.photo}
                                                category={p.category}
                                            />
                                        )
                                    }) :
                                    <p>There is no available products</p>
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section>

            </section>
        </Container>
    );
}

export default Menu;
