import Nav from "./components/Nav";
import { Link } from "react-router-dom";
import Shirt from "./components/images/Grey-flask-shirt.jpeg";
import ShirtTwo from "./components/images/shirt-two.jpeg";
import ShirtThree from "./components/images/Shirt-three.jpeg";
import ShirtFour from "./components/images/Shirt-four.jpg";


function App() {

  return (
    <div>
      <Nav />
      <div className="text-white font-bold text-center m-10 text-2xl">
        <div>
          WELCOME TO THE FAKE FLASK! WE SELL ALL KINDS OF FANTASTIC FLASK FUN!
        </div>
        <br />
        <br />
        <div>Please take a look at a sample of our products below.</div>
        <br />
        <Link to={`/shop`}>
        <div className="grid grid-cols-4 gap-5 h-auto w-auto ">
          <div className="hover:scale-105">
            <img src={Shirt}></img>
          </div>
          <div className="hover:scale-105">
            <img src={ShirtTwo}></img>
          </div>
          <div className="hover:scale-105">
            <img src={ShirtThree}></img>
          </div>
          <div className="hover:scale-105">
            <img src={ShirtFour}></img>
          </div>
        </div>
        </Link>
        <br/>
        To learn more about us check out our ABOUT tab! :D
      </div>
    </div>
  );
}

export default App;
