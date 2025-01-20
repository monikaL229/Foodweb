
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <header className="max-w-[1600px] mx-auto flex justify-between items-center p-4">
       <div className="flex items-center">
         <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
         Best <span className="font-bold">Eats</span>
        </h1>
      </div>

      <nav className="hidden lg:flex space-x-8 font-Archivo text-lg">
      <Link to="/" className="text-xl py-4 transform  animate-fadeIn delay-300">
          Home
        </Link>
        <Link to="/menu" className="text-xl py-4 transform  animate-fadeIn delay-300">
        Menu
        </Link>
        <Link to="/about" className="text-xl py-4 transform  animate-fadeIn delay-300">
      About        </Link>
        
        <Link to="/blog" className="text-xl py-4 transform  animate-fadeIn delay-300">
          Blog
        </Link>
        <Link to="/contact" className="text-xl py-4 transform  animate-fadeIn delay-300">
          Contact Us
        </Link>
      </nav>

      <div className="hidden lg:block">
      <Link to="/booktable">
      <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:text-gray-200">
        Book a Table
      </button>
    </Link>
      </div>
      
      <button
        className="lg:hidden flex items-center px-3 py-2 border rounded text-yellow border-white transition-transform duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className={`fill-current h-5 w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M0 3h20v2H0zM0 7h20v2H0zM0 11h20v2H0z" />
        </svg>
      </button>

      {isOpen && (
        <nav
          className={`lg:hidden bg-black text-center absolute top-24 left-1/2 transform -translate-x-1/2 w-full py-8 z-50 transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-8">
            <li>
            <Link to="/" className="hover:text-yellow text-white">
                Home
              </Link>
            </li>
            <li>
            <Link to="/menu" className="hover:text-yellow text-white">
         Menu  </Link>
            </li>
            <li>
            <Link to="/about" className="hover:text-yellow text-white">
             About</Link>
            </li>
            <li>
              
            <Link to="/blog" className="hover:text-yellow text-white">
                Blog
              </Link>
            </li>
            <li>
            <Link to="/contact"  className="hover:text-yellow text-white">
                Contact Us
              </Link>
            </li>
            <li>
            <Link to="/booktable">
      <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:text-gray-200">
        Book a Table
      </button>
    </Link>
            </li>
          </ul>
        </nav>
    
        
      )}
         </header> 
    </>
  );
};

export default Header;
