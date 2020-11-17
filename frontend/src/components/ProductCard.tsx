import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/Normalize.css';
import '../styles/App.css';
import { Product } from '../types/product';

function ProductCard({ name, price, photo, description, category }: Product) {

    return (
        <div className="col-md-3 offset-1 second-color box">
            <img
                src={photo}
                alt={description}
                className="img"
            />
            <h5 className="text-center">{name}</h5>
            <h6>{price}</h6>
            <h6>{category}</h6>
        </div>
    );
}

export default ProductCard;
