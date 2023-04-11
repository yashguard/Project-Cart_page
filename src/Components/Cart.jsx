import React from 'react';

const Cart = (props) => {
  console.log(props.name)
  return (
    <>
      <div className="cart">
        <div className="main-box">
          <div>
            <div className="box">
              <h2>{props.name}</h2>
              <span>
                <sup>₹</sup>
                {props.price}
              </span>
              <div className="center">
                <button onClick={()=> props.setQuantity(-1)}>
                  -
                </button>
                <span>{props.quantity}</span>
                <button onClick={() => props.setQuantity(1)}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
