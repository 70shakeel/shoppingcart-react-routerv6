import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const ShoeList = ({ shoes }) => {
  const [cart, setCart] = useContext(GlobalContext);
  console.log(cart);

  return (
    <div className="shoelist">
      {shoes.map((shoe) => (
        <section key={shoe.id} className="shoe">
          <img src={shoe.img} alt="" width="100%" />
          <button
            className="btn"
            onClick={() => {
              const sho = { color: shoe.color, price: shoe.price, id: shoe.id };
              setCart((curr) => [...curr, sho]);
            }}
          >
            +
          </button>
        </section>
      ))}
    </div>
  );
};

export default ShoeList;
