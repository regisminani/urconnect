import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const LayoutHome= () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet /> {/* This will render the child components dynamically */}
      </div>
      
    </div>
  );
};

export default LayoutHome;
