import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import About from "./components/About";
import Cart from "./components/Cart";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;