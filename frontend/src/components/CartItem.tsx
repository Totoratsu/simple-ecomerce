import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/Normalize.css';
import '../styles/header.css';

function CartItem({ name, price, photo }: any) {

  return (
    <div className="row mt-2">
      <div className="col-md-3">
        <img
          src={photo}
          alt={name}
          className="img rounded"
        />
      </div>
      <div className="col text-center">
        1
      </div>
      <div className="col text-center">
        ${price}
      </div>
      <div className="col text-center">
        ${price}
      </div>
      <hr/>
    </div>
  );
}

export default CartItem;
