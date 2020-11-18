import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';

import '../styles/Normalize.css';
import '../styles/App.css';
import CategoryBox from '../components/CategoryBox';
import Container from '../components/Container';
import { getCart } from '../redux/cart/reducers';

function Index({ cart }: any) {
    return (
        <Container cart={cart}>
            <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.shutterstock.com%2Fimage-vector%2Fsample-red-square-grunge-stamp-260nw-338250266.jpg&f=1&nofb=1"
                alt=""
                className="img"
            />

            <section className="padding first-color">
                <div className="container">
                    <h3 className="text-center">Categories</h3>
                    <div className="row justify-content-around">
                        <CategoryBox
                            name="Male"
                            desc="Male"
                            img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1VxoVQFXXXXcHXXXXq6xXFXXXt%2FMYDBSH-Brand-Fashion-V-Neck-Men-T-Shirt-Casual-Elastic-Cotton-Male-Slim-Fit-Tshirt-Man.jpg&f=1&nofb=1"
                        />
                        <CategoryBox
                            name="Female"
                            desc="Female"
                            img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1VxoVQFXXXXcHXXXXq6xXFXXXt%2FMYDBSH-Brand-Fashion-V-Neck-Men-T-Shirt-Casual-Elastic-Cotton-Male-Slim-Fit-Tshirt-Man.jpg&f=1&nofb=1"
                        />
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

export default connect(mapStateToProps)(Index);
