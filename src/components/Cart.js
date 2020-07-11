import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Cart = () => {
  const [cart, setCart] = useContext(GlobalContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  console.log(cart);
  return (
    <div>
      <span>
        <FontAwesomeIcon icon={faMoneyBill} />
        (${totalPrice})
      </span>
      <Link to="/showcart">
        <FontAwesomeIcon icon={faShoppingCart} />({cart.length})
      </Link>
    </div>
  );
};

export default Cart;
