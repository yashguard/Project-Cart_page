import {useState} from 'react';

const Cart = (props) => {
  let [price,setPrice] = useState(0)
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
                <button onClick={()=> setPrice(price === 0 ? 0 : --price)}>
                  -
                </button>
                <span>{price}</span>
                <button onClick={()=> setPrice(++price)}>
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
