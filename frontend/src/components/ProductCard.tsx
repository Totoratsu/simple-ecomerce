import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/Normalize.css';
import '../styles/App.css';
import { Product } from '../types/product';

interface Props {
    name: string;
    price: number;
    photo: string;
    description: string;
    category: string;
    cb: () => void;
}

function ProductCard({ name, price, photo, description, category, cb }: Props) {

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
            <div className="float-right">
                    <button type="button" className="btn btn-success" onClick={cb}>+</button>
                </div>
        </div>
    );
}

export default ProductCard;
