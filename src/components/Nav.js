import logo from "./logo.png";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext } from "react";

const Nav = () => {



  const {count} = useContext(UserContext);


  return (
    <nav className="bg-gray-700 w-screen">
      <div className="mx-10 px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link to={`/`}>
              <div>
                <h1 className="flex items-center py-4 px-2 mr-72 cursor-pointer">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-12 w-12 mr-2 border border-gray-900 border-dotted"
                  />
                  <span className="font-semibold text-gray-500 text-lg">
                    TheFakeFlask
                  </span>
                </h1>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-32 text-2xl">
              <Link to={`/`}>
                <h1 className="py-4 px-10 text-gray-500 font-semibold hover:text-green-500 transition duration-300 hover:border-b hover:border-green-500 cursor-pointer">
                  Home
                </h1>
              </Link>
              <Link to={`/shop`}>
                <h1 className="py-4 px-10 text-gray-500 font-semibold hover:text-green-500 transition duration-300 hover:border-b hover:border-green-500 cursor-pointer">
                  Shop
                </h1>
              </Link>
              <Link to={`/about`}>
                <h1 className="py-4 px-10 text-gray-500 font-semibold hover:text-green-500 transition duration-300 hover:border-b hover:border-green-500 cursor-pointer">
                  About
                </h1>
              </Link>
              <Link to={`/cart`}>
                <h1
                  className="py-4 px-10 items-center justify-center
         hover:bg-green-500 text-gray-500
         rounded-3xl hover:rounded-xl
         transition-all duration-300 ease-linear cursor-pointer"
                >
                  <BsCart2 size="30" />
                  <h3 className="text-gray-500 text-center  translate-x-4 -translate-y-4 text-base bg-green-500 rounded-full w-6 h-6 ">
                    {count}
                  </h3>
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
