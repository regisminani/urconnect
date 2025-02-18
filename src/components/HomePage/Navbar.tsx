import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-900">UR-Connect</h1>
        <button
          className="md:hidden text-blue-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
        <nav
          className={`md:flex space-x-6 absolute md:static top-16 left-0 w-full md:w-auto p-4 md:p-0 bg-transparent md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
            isOpen ? "block bg-white" : "hidden"
          }`}
        >
          <Link to="/" className="block md:inline text-gray-600 text-md font-light hover:text-blue-700 transition-all duration-200">
            Home
          </Link>
          <Link to="/about" className="block md:inline text-gray-600 text-md font-light hover:text-blue-700 transition-all duration-200">
            About
          </Link>
          <Link to="/suggestion" className="block md:inline text-gray-600 text-md font-light hover:text-blue-700 transition-all duration-200">
            Suggestions
          </Link>
          
          <Link to="/loginadmin" className="block md:inline text-gray-600 text-md font-light hover:text-blue-600 hover:bg-blue-100 border rounded px-1  border-blue-900 transition-all duration-200">
            Sign Up/Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
