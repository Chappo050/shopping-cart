import logo from './logo.png';
import { BsCart2} from 'react-icons/bs';
const Nav = () => {
  return (
    <nav class="bg-gray-700 w-screen">
      <div class="mx-10 px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
              <a href="#" class="flex items-center py-4 px-2 mr-72">
                <img src={logo}  alt="Logo" class="h-12 w-12 mr-2 border border-gray-900 border-dotted" />
                <span class="font-semibold text-gray-500 text-lg">
                  Navigation
                </span>
              </a>
            </div>

            <div class="hidden md:flex items-center space-x-32 text-2xl">
              <i class="py-4 px-10 text-green-500 border-b-4 border-green-500 font-semibold ">
                Home
              </i>
              <i class="py-4 px-10 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                Shop
              </i>
              <i class="py-4 px-10 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
                About
              </i>
              <i class="py-4 px-10 items-center justify-center
         hover:bg-green-500 text-gray-500
         rounded-3xl hover:rounded-xl
         transition-all duration-300 ease-linear cursor-pointer">
                <BsCart2 size="30"/>
              </i>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
