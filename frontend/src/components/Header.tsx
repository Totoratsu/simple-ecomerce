import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Cart from '../assets/shoppingCart.svg';
import Shop from '../assets/shop.svg';
import '../styles/Normalize.css';
import '../styles/header.css';

interface Props {
    items: string[]
}

function Header({ items }: Props) {

  return (
    <div>
      <header className="CommonHeader">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 align-self-center">
                <img src={Shop} alt=""/>
                Shop
            </div>
            <div className="col-md-4 align-self-center text-center">
                Menu
            </div>
            <div className="col-md-4 align-self-center text-right">
              {items.length}
              <img src={Cart} alt=""/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
