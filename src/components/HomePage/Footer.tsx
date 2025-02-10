

const Footer = () => {
  return (
    <div className="min-h-screen">
     

      {/* Footer */}
      <footer className="bg-white text-gray-600 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-blue-900">UR-Connect</h1>
            <p className="text-sm font-light">University of Rwanda suggestion box</p>
          </div>
          <div className="flex space-x-12 mt-4 md:mt-0">
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-md text-gray-800">Company</h3>
              <a href="#" className="text-sm font-light hover:text-blue-700 block mt-2">
                About
              </a>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-md text-gray-800">Contact</h3>
              <a href="#" className="text-sm font-light hover:text-blue-700 block mt-2">
                Help/FAQ
              </a>
            </div>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700">
            Explore more
          </button>
        </div>
        <p className="text-center text-sm font-light text-gray-500 mt-8">
          &copy; 2025 All rights reserved@urcst.com
        </p>
      </footer>
    </div>
  );
};

export default Footer;
