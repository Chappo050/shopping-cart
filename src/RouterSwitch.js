import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import About from "./components/About";
import Cart from "./components/Cart";
import { UserContext } from "./UserContext";
import { useState } from "react";

const RouteSwitch = () => {
  const [count, setCount] = useState({count: 0, items:[]});
  return (
    <UserContext.Provider value={{ count, setCount }}>
      <BrowserRouter basename='/shopping-cart/'>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default RouteSwitch;
