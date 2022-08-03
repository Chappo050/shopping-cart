import Nav from "./Nav";
import Shirt from "./images/Grey-flask-shirt.jpeg";
import ShirtTwo from "./images/shirt-two.jpeg";
import ShirtThree from "./images/Shirt-three.jpeg";
import ShirtFour from "./images/Shirt-four.jpg";
import { UserContext } from "../UserContext";
import { useContext, useEffect } from "react";

const Shop = () => {
  const itemOne = { article: Shirt, price: 2.45 };
  const itemTwo = { article: ShirtTwo, price: 4 };
  const itemThree = { article: ShirtThree, price: 5 };
  const itemFour = { article: ShirtFour, price: 6.5 };

  const itemList = [itemOne, itemTwo, itemThree, itemFour];


  const {count, setCount} = useContext(UserContext);

  useEffect(() => {
    console.log(count);
  },[count])


  const addToCart = (newItem) => {
    setCount(prevState => {
      return {...prevState, count: count.count + 1, items: count.items.concat(newItem)  };
    });
  };
  return (
    <div>
      <Nav  />
      <div className="text-white font-bold text-center m-24 text-2xl">
        WELCOME TO OUR SHOP! PLEASE HAVE A FROLIC!
        <br />
        <br />
        <div className="grid grid-cols-4 gap-20 h-auto w-auto">
          {itemList.map((item, key) => (
            <ShopCard
              key={key}
              item={item}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ShopCard = ({ item, addToCart }) => {
  return (
    <div className="grid grid-cols-2 gap-3 ">
      <div className=" col-span-2 hover:scale-105">
        <img src={item.article} alt="Item couldn't load"></img>
      </div>
      <div>
        <button
          className="bg-gray-700 hover:bg-green-600 w-full rounded-3xl hover:rounded-xl
         transition-all duration-300 ease-linear cursor-pointer"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      </div>
      <div>${item.price.toFixed(2)}</div>
    </div>
  );
};

export default Shop;
