import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/Normalize.css';
import '../styles/App.css';
import CartItem from '../components/CartItem';
import Container from '../components/Container';

function Menu() {

    let items: string[] = [];

    return (
        <Container items={items}>
            <section className="second-color">
                <div className="container">
                    <CartItem
                        items={['']}    
                    />
                </div>
            </section>
            
            <section>
                
            </section>
        </Container>
    );
}

export default Menu;
