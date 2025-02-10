import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutHome= () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet /> {/* This will render the child components dynamically */}
      </div>
      <Footer />
    </div>
  );
};

export default LayoutHome;
