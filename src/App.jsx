import "./App.css";
import Cart from "./Components/Cart";
import React, { useState } from "react";
import Total from "./Components/Total";

function App() {
  let [total,setTotal] = useState(420)
  let object = [
    {
      name: "pizza",
      price: 70,
    },
    {
      name: "noodles",
      price: 100,
    },
    {
      name: "biryani",
      price: 50,
    },
    {
      name: "sandwich",
      price: 40,
    },
    {
      name: "burger",
      price: 150,
    },
  ];
  return (
    <div className="abcd">
      {object.map((v, i) => {
        return <>
          <Cart name={v.name} price={v.price} setTotal={setTotal} total={total}  />
        </>
      })}
      <Total total={total} />
    </div>
  );
}

export default App;
