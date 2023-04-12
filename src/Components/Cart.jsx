import { useState } from "react";

const Cart = (props) => {
  let [price, setPrice] = useState(0);
  const setTotalDec = () => {
    setPrice(price === 0 ? 0 : --price);
    props.setTotal(props.total === 420 ? 420 : props.total - props.price);
  };
  const setTotalInc = () => {
    setPrice(++price);
    props.setTotal(props.total + props.price);
  };
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
                <button onClick={setTotalDec}>-</button>
                <span>{price}</span>
                <button onClick={setTotalInc}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
