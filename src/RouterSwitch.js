import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import About from "./components/About";
import Cart from "./components/Cart";
import { UserContext } from "./UserContext";
import { useEffect, useState } from "react";
import db from "./firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

const RouteSwitch = () => {
  const [count, setCount] = useState({ count: 0, items: [] });

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) =>
    setUserInfo(snapshot.docs.map((doc) => doc.data())))
  },[])

  useEffect(() => {
    const tempCount = userInfo.map((user) => user.count)

    console.log(tempCount);
    setCount(prevState => {
      return {...prevState, count: tempCount[0] };
    });
  }, [userInfo])
  
  return (
    <UserContext.Provider value={{ count, setCount }}>
      <BrowserRouter basename="/shopping-cart/">
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
