import "./App.css";
import Cart from "./Components/Cart";
import React, { useState } from "react";
import Total from "./Components/Total";

function App() {
  let [price, setPrice] = useState(0);
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
    setPrice(price + argu);
  };
  return (
    <div>
      {object.map((v, i) => {
        return <>
          <Cart name={v.name} price={v.price} quantity={v.quantity} setQuantity={setQuantity} />
        </>
      })}
      <Total />
    </div>
  );
}

export default App;
