import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const NavbarAdmin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Retrieve username from localStorage
  const username = localStorage.getItem("username");
  const firstLetter = username ? username.charAt(0).toUpperCase() : "U"; // Default to 'U' if no username found

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className="bg-white">
        <div className="w-full fixed top-0 bg-white z-30 backdrop-blur-md shadow-md">
          <div className="flex h-16 items-center justify-between px-4 md:px-12">
            <div className="flex-1 flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <img src="/logo.svg" alt="logo" className="w-12" />
                <Link to="/">
                <h1 className="text-2xl font-bold text-[#006991]">UR-Connect</h1>
                </Link>
              </div>
            </div>

            {/* Sub Navigation Tabs */}
            <ul className="hidden md:flex justify-center mt-6 mb-4">
              <li>
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `text-sm mr-4 pb-2 border-b-2 transition-all duration-200 ${
                      isActive ? "border-[#006991] text-[#006991]" : "border-white hover:text-[#006991] hover:border-[#006991]"
                    }`
                  }
                >
                  New Suggestion
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="answered"
                  className={({ isActive }) =>
                    `text-sm mr-4 pb-2 border-b-2 transition-all duration-200 ease-in-out ${
                      isActive ? "border-[#006991] text-[#006991]" : "border-white hover:text-[#006991] hover:border-[#006991]"
                    }`
                  }
                >
                  Answered Suggestion
                </NavLink>
              </li>
            </ul>

            {/* Profile Menu */}
            <div className="flex md:flex md:items-center md:gap-12 relative">
              <div className="hidden md:relative md:block">
                <button
                  type="button"
                  className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Toggle dashboard menu</span>
                  <h1 className="w-10 h-10 text-white pt-2 bg-sky-800">{firstLetter}</h1>
                </button>

                {isMenuOpen && (
                  <div
                    className="absolute right-0 z-20 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border bg-white shadow-lg"
                    role="menu"
                  >
                    <div className="p-2">
                      <NavLink to="mysuggestion">
                        <span className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50" role="menuitem">
                          My profile
                        </span>
                      </NavLink>
                    </div>

                    <div className="p-2">
                      <NavLink to="/">
                        <button
                          type="submit"
                          className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                          role="menuitem"
                        >
                          Logout
                        </button>
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile menu toggle button */}
              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-sky-100">
              <nav aria-label="Global" className="block p-4">
                <ul className="space-y-4 text-md">
                  <li>
                    <NavLink
                      to="/admin"
                      className={({ isActive }) =>
                        `text-white rounded-full px-4 py-1 transition ${
                          isActive ? "bg-sky-800" : "hover:text-gray-500/75"
                        }`
                      }
                    >
                      New Suggestion
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="answered"
                      className={({ isActive }) =>
                        `text-gray-500 px-2 py-1 rounded-full transition ${
                          isActive ? "bg-sky-800 text-white" : "hover:text-white hover:bg-sky-800"
                        }`
                      }
                    >
                      Answered Suggestion
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default NavbarAdmin;
