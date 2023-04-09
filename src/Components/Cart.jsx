import React, { useState } from "react";

function Cart() {
  let [price, setPrice] = useState(0);
  let id = Math.trunc(Math.random() * 100);
  let object = [
    {
      name: "pizza",
      price: 70,
      quantity: price,
    },
    {
      name: "noodles",
      price: 100,
      quantity: price,
    },
    {
      name: "biryani",
      price: 50,
      quantity: price,
    },
    {
      name: "sandwich",
      price: 40,
      quantity: price,
    },
    {
      name: "burger",
      price: 150,
      quantity: price,
    },
  ];
  const setQuantity = (argu) => {
    setPrice(price + argu)
  };
  return (
    <div className="cart">
      <div className="main-box">
        {object.map((v, i) => {
          return (
            <div key={i}>
              <div className="box">
                <h2>{v.name}</h2>
                <span>
                  <sup>₹</sup>
                  {v.price}
                </span>
                <div className="center">
                  <button id={i} onClick={(item) => setQuantity(-1)}>-</button>
                  <span id={id}>{price}</span>
                  <button id={i} onClick={() => setQuantity(1)}>+</button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="total-box">
          <h2>Total</h2>
          <span>
            <sup>₹</sup>20
          </span>
          <div className="center"></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
