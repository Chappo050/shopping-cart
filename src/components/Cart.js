import Nav from "./Nav";
import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import db from "../firebase";

const Cart = () => {
  const { count, setCount } = useContext(UserContext);
  const [total, setTotal] = useState(0);

  const delFromCart = (delItem) => {
    //only delete the first occurance of an item
    let seenItem = false;
    const filtered = count.items.filter((i) => {
      if (seenItem) {
        return true;
      }
      seenItem = i === delItem;
      return !seenItem;
    });
    setCount((prevState) => {
      return {
        ...prevState,

        items: filtered,
        count: count.count - 1,
      };
    });
    handleEdit();
  };

  const handleEdit = async () => {
    const docRef = doc(db, "users", "cart");
    const payload = { count: count.count};

    setDoc(docRef, payload);
  };


  useEffect(() => {
    const newTotal = count.items.reduce((accumulator, object) => {
      return accumulator + object.price;
    }, 0);

    setTotal(newTotal);
  }, [count]);

  return (
    <div>
      <Nav />
      <div className="text-white font-bold text-center m-24 text-2xl">
        Please check your items and the total for purchase. Total is displayed
        at the bottom.
        <br />
        <br />
        <div className="grid grid-cols-1 gap-5 h-9 w-full ">
          {count.items.map((item, key) => (
            <CartCard key={key} item={item} delFromCart={delFromCart} />
          ))}
          <div className="text-white text-3xl font-extrabold border-b-4 border-t-4 p-5">
            Total: ${total.toFixed(2)}
            <button
              className="bg-gray-700 hover:bg-green-600 w-full p-2 m-4 rounded-3xl hover:rounded-xl
         transition-all duration-300 ease-linear cursor-pointer"
            >
              Pay (Not Implemented)
            </button>
          </div>

          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

const CartCard = ({ item, delFromCart }) => {
  return (
    <div className="grid grid-cols-3 gap-2 p-3 border-y">
      <div className=" col-span-1 h-full w-1/2 hover:scale-105">
        <img src={item.article} alt="Item couldn't load"></img>
      </div>
      <div className="self-center w-1/2">
        <button
          className="bg-gray-700 hover:bg-green-600 w-full rounded-3xl hover:rounded-xl
         transition-all duration-300 ease-linear cursor-pointer"
          onClick={() => delFromCart(item)}
        >
          Delete
        </button>
      </div>
      <div className="self-center text-left">${item.price.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
