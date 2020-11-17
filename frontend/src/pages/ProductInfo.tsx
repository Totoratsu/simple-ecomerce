import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/Normalize.css';
import '../styles/App.css';
import Container from '../components/Container';

function ProductInfo() {

    let items: string[] = [];

    return (
        <Container items={items}>
            <div className="first-color padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src=""
                                alt=""
                            />
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-center">Title</h2>
                            <p className="text-justify">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, aperiam? Mollitia laboriosam iste ipsa ipsam quam ad. Perferendis ab maxime nemo voluptates, repudiandae quibusdam ipsam non vitae delectus! Laboriosam, adipisci!
                            </p>
                            <div className="float-right">
                                <button type="button" className="btn btn-success" onClick={() => { }}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ProductInfo;
