import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for better UI

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="logo" className="w-12" />
          <h1 className="text-2xl font-bold text-[#006991]">UR-Connect</h1>
        </div>

        <button
          className="md:hidden text-blue-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out p-4 md:p-0 rounded-lg md:flex items-center space-x-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a href="/" className="block md:inline text-gray-700 hover:text-[#006991] px-4 py-2">
            Home
          </a>
          <a href="#about" className="block md:inline text-gray-700 hover:text-[#006991] px-4 py-2">
            About
          </a>
          <a href="#suggestion" className="block md:inline text-gray-700 hover:text-[#006991] px-4 py-2">
            Suggestions
          </a>
          <Link
  to="/loginadmin"
  className="block md:inline text-[#006991] bg-transparent border border-[#006991] rounded-md px-4 py-2 transition duration-300 hover:bg-[#006991] hover:text-white"
>
  Sign Up/Login
</Link>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;
