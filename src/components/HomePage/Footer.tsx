import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="relative mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8 lg:pt-12">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-[#006991] lg:justify-start">
              <div className="flex items-center space-x-2">
                <img src="./src/assets/logo.svg" alt="logo" className="w-12" />
                <h1 className="text-2xl font-bold text-[#006991]">UR-Connect</h1>
              </div>
            </div>

            <p className="mx-auto max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              UR-Connect is a platform designed to enhance collaboration and engagement within the University of Rwanda community.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <a href="/" className="block md:inline text-gray-700 hover:text-[#006991] px-4 py-2">
              Home
            </a>
            <a href="#about" className="block md:inline text-gray-700 hover:text-[#006991] px-4 py-2">
              About
            </a>
            <a href="#suggestion" className="block md:inline text-gray-700 hover:text-[#006991] px-4 py-2">
              Suggestions
            </a>
          </ul>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
