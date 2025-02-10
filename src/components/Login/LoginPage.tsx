import { SetStateAction, useState } from "react";
import { redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [regNo, setRegNo] = useState("");
  const [pass, setPass] = useState("");
  const [isVisible, setIsVisible] = useState(true); //  Tracking if the screen is visible

  // Handle RegNo Change
  const handleRegChanges = (e: { target: { value: SetStateAction<string>; }; }) => {
    setRegNo(e.target.value);
  };

  // Handle Password Change
  const handlePassChanges = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPass(e.target.value);
  };

  // Validate Inputs and Show Toasts
  const validateFields = () => {
    if (regNo.length !== 9) {
      toast.error("Reg No must be exactly 9 characters.");
      return false;
    }

    if (pass.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return false;
    }

    return true;
  };

  // Handle Form Submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (validateFields()) {
      toast.success("Logged in Successfully!");
    }
  };

  // Function to close the login screen
  // const handleClose = () => {
  //   setIsVisible(false);
  // };

  // If isVisible is false, return nothing (hides the component)
  if (!isVisible){
   redirect('/')
   
  }
  return (
    <div className="ml-70 mt-14 w-[700px] h-[500px] flex rounded-10xl relative shadow-xl shadow-blue-500/30">
      <div className="w-1/2 flex flex-col items-center justify-center border-2" style={{ borderColor: "#006991", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
        <div style={{ color: "#006991" }} className="text-5xl mt-10 text-center font-serif">
          UR Connect
        </div>
        <div className="h-72 w-72">
          <img src="/public/ur.jpg" alt="Ur-logo" className="w-full h-full object-contain mt-8" />
        </div>
      </div>

      <form
        style={{ backgroundColor: "#006991", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}
        className="w-1/2 relative p-6 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        {/* Close Button */}
        {/* <button
          type="button"
          onClick={handleClose}
          className="text-white absolute right-4 top-4 bg-red-500 px-6 py-1 text-sm hover:bg-red-600 rounded-md"
        >
          X
        </button> */}

        <div className="text-white text-5xl mt-20 font-serif">Student Page</div>
        <div className="text-white text-3xl mt-7 font-serif">Sign in</div>

        {/* Reg No Input */}
        <label>
          <input
            className="focus-visible:outline-0 w-full px-13 mt-7 text-gray-700 rounded-lg p-2 bg-white"
            type="text"
            placeholder="Reg No"
            value={regNo}
            onChange={handleRegChanges}
          />
        </label>

        {/* Password Input */}
        <label>
          <input
            className="w-full px-13 text-start mt-7 focus-visible:outline-0 text-gray-700 p-2 bg-white"
            type="password"
            placeholder="Password"
            value={pass}
            onChange={handlePassChanges}
          />
        </label>

        <button
          type="submit"
          className="w-full mt-7 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-white/20 transition duration-300"
        >
          Login
        </button>

        {/* Links */}
        <div className="flex justify-between w-full text-sm mt-2">
          <a href="#" className="text-white hover:underline mt-3">
            Forgot Password?
          </a>
          <a href="#" className="text-white hover:underline mt-3">
            Sign up
          </a>
        </div>
      </form>

      {/* Toast Container (Required for Displaying Toasts) */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default LoginPage;
