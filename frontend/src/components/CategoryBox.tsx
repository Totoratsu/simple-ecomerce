import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/Normalize.css';
import '../styles/App.css';

interface Props {
    name: string;
    img: string;
    desc?: string;
}

function CategoryBox({ name, img, desc }: Props) {

    return (
        <div className="col-md-4 second-color box">
            <h5 className="text-center">{name}</h5>
            <img
                src={img}
                alt={desc}
                className="img"
            />
        </div>
    );
}

export default CategoryBox;
