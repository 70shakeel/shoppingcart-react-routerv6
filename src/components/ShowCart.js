import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const ShowCart = () => {
  const [cart, setCart] = useContext(GlobalContext);
  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <div className="showcart">
      <Link className="lnk" to="/">
        Back
      </Link>
      <Cart />
      {cart.map((item) => {
        return (
          <div>
            <li>
              {item.color}
              {item.size} ${item.price}
              &nbsp;
              <button className="btn" onClick={() => handleRemoveItem(item.id)}>
                x
              </button>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default ShowCart;
