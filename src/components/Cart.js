import Nav from "./Nav";
import { UserContext } from "../UserContext";
import { useContext, useEffect } from "react";

const Cart = () => {

  
  const { count, setCount } = useContext(UserContext);

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
  };


  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <Nav />
      <div className="text-white font-bold text-center m-24 text-2xl">
        WELCOME TO OUR SHOP! PLEASE HAVE A FROLIC!
        <br />
        <br />
        <div className="grid grid-cols-1 gap-20 h-9 w-full">
          {count.items.map((item, key) => (
            <CartCard key={key} item={item} delFromCart={delFromCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CartCard = ({ item, delFromCart }) => {
  return (
    <div className="grid grid-cols-4 gap-3 ">
      <div className=" col-span-2 h-1/2 w-1/2 hover:scale-105">
        <img src={item.article} alt="Item couldn't load"></img>
      </div>
      <div>
        <button
          className="bg-gray-700 hover:bg-green-600 w-full rounded-3xl hover:rounded-xl
         transition-all duration-300 ease-linear cursor-pointer"
          onClick={() => delFromCart(item)}
        >
          Delete
        </button>
      </div>
      <div>${item.price.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
