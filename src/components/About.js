import Nav from "./Nav";

const About = () => {
  return (
    <div>
      <Nav />
      <div className="text-white font-bold text-center m-10 text-2xl">
        <div>
          This shop is just for flasky fun and practice! 
          <br/>
          <br/>
          Do not take this page seriously.
          <br/> 
          <br/>
          Check out the code on my GitHub
          <br/>
          <br/>
          <a className=" text-green-500 hover:text-green-800" href="https://github.com/Chappo050/shopping-cart">My GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default About;
