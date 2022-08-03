import Nav from "./components/Nav";
import Shirt from "./components/images/Grey-flask-shirt.jpeg";

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
        <div className="grid grid-cols-4 gap-5 h-auto w-auto">
          <div>
            <img src={Shirt}></img>
          </div>
          <div>
            <img src={Shirt}></img>
          </div>
          <div>
            <img src={Shirt}></img>
          </div>
          <div>
            <img src={Shirt}></img>
          </div>
        </div>
        <br/>
        To learn more about us check out our ABOUT tab! :D
      </div>
    </div>
  );
}

export default App;
