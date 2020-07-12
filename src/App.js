import React, { useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import GlobalContext from "./context/GlobalContext";
import Cart from "./components/Cart";
import ShoeList from "./components/ShoeList";
import sh1 from "./img/1.jpg";
import sh2 from "./img/2.jpg";
import sh3 from "./img/3.jpg";
import sh4 from "./img/4.jpg";
import sh5 from "./img/5.jpg";
import sh6 from "./img/6.jpg";
import sh7 from "./img/7.jpg";
import sh8 from "./img/8.jpg";
import sh9 from "./img/9.jpg";
import sh11 from "./img/11.jpg";
import sh12 from "./img/12.jpg";
import sh13 from "./img/13.jpg";
import sh14 from "./img/14.jpg";
import sh15 from "./img/15.jpg";
import sh16 from "./img/16.jpg";
import ShowCart from "./components/ShowCart";

const shoes = [
  {
    id: 1,
    color: "black",
    size: "large",
    price: 110,
    img: sh1,
  },
  {
    id: 2,
    color: "brown",
    size: "medium",
    price: 200,
    img: sh2,
  },
  {
    id: 3,
    color: "brown",
    size: "small",
    price: 120,
    img: sh3,
  },
  {
    id: 4,
    color: "white",
    size: "small",
    price: 120,
    img: sh4,
  },
  {
    id: 5,
    color: "purple",
    size: "small",
    price: 120,
    img: sh8,
  },
  {
    id: 6,
    color: "red",
    size: "small",
    price: 120,
    img: sh6,
  },
  {
    id: 7,
    color: "skin",
    size: "small",
    price: 120,
    img: sh7,
  },
  {
    id: 8,
    color: "white",
    size: "small",
    price: 120,
    img: sh5,
  },
  {
    id: 9,
    color: "black",
    size: "large",
    price: 110,
    img: sh9,
  },
  {
    id: 10,
    color: "red",
    size: "medium",
    price: 200,
    img: sh15,
  },
  {
    id: 11,
    color: "black",
    size: "small",
    price: 120,
    img: sh13,
  },
  {
    id: 12,
    color: "white",
    size: "small",
    price: 120,
    img: sh12,
  },
  {
    id: 13,
    color: "yellow",
    size: "small",
    price: 120,
    img: sh11,
  },
  {
    id: 14,
    color: "gray",
    size: "small",
    price: 120,
    img: sh14,
  },
  {
    id: 15,
    color: "red",
    size: "small",
    price: 120,
    img: sh16,
  },
];

function App() {
  const cart = useState([]);
  console.log(shoes);
  return (
    <GlobalContext.Provider value={cart}>
      <div className="App">
        <Route exact path="/">
          <Cart />
          <ShoeList shoes={shoes} />
        </Route>
        <Route exact path="/showcart">
          <ShowCart />
        </Route>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
