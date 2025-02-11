import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const LoginPageAdmin = () => {
  const [staffEmail, setStaffEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);  // New state for loading
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle Staff Email Change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStaffEmail(e.target.value);
  };

  // Handle Password Change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);  // Start loading

    try {
      const response = await fetch("https://ur-connect.onrender.com/api/staff/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          staffEmail,
          password,
        }),
      });

      const data = await response.json();
      setIsLoading(false);  // Stop loading

      if (response.status === 200) {
        // Save the token (you can save it to localStorage or in state)
        localStorage.setItem("token", data.token);

        // Show success toast
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 5000,
        });

        // Redirect to another page, e.g., dashboard
        navigate("/dashboard");
      } else {
        setError(data.message || "Login failed");
        toast.error(data.message || "Login failed", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (err) {
      setIsLoading(false);  // Stop loading
      setError("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

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
        onSubmit={handleSubmit}
        style={{ backgroundColor: "#006991", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}
        className="w-1/2 relative p-6 flex flex-col items-center"
      >
        <div className="text-white text-5xl mt-20 font-serif">Admin Login</div>

        {/* Staff Email Input */}
        <label>
          <input
            className="focus-visible:outline-0 w-full px-13 mt-7 text-gray-700 rounded-lg p-2 bg-white"
            type="email"
            placeholder="Staff Email"
            value={staffEmail}
            onChange={handleEmailChange}
          />
        </label>

        {/* Password Input */}
        <label>
          <input
            className="w-full px-13 text-start mt-7 focus-visible:outline-0 text-gray-700 p-2 bg-white"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        {/* Error Message */}
        {error && <div className="text-red-500 mt-4">{error}</div>}

        {/* Login Button or Loading */}
        <button
          type="submit"
          className="w-full mt-7 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-white/20 transition duration-300"
        >
          {isLoading ? "Loading..." : "Login"}  {/* Change button text to Loading when loading */}
        </button>

        {/* Links */}
        <div className="flex justify-between w-full text-sm mt-2">
          <a href="#" className="text-white hover:underline mt-3">
            Forgot Password?
          </a>
          <Link to ="/registeradmin">
          <a href="#" className="text-white  hover:underline mt-3">
            Sign up
          </a>
          </Link>
        </div>
      </form>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default LoginPageAdmin;
