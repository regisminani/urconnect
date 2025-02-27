import { SetStateAction, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../../api";
import { useNavigate } from "react-router-dom";
import { StudentLogin } from "../../types";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface Token extends JwtPayload {
  role?: string;
}

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  const validateFields = () => {
    if (!email) {
      toast.info("Please fill the email field.");
      return false;
    }
    if (!validEmail.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (!password) {
      toast.info("Please fill the password field.");
      return false;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return false;
    }
    return true;
  };

  const formData: StudentLogin = {
    email: email,
    password: password,
  };
  console.log(formData);
  // Handle Form Submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    setLoading(true);
    e.preventDefault();

    if (validateFields()) {
      try {
        const { data } = await loginUser(formData);
        console.log("RESPONSE", data);
        localStorage.setItem("token", data.token);
        const decodedToken: Token = jwtDecode(data.token);
        setLoading(false);
        if (decodedToken?.role === "Student") {
          navigate("/suggestions");
        } else navigate("/mainadmin");
        toast.success("Logged in Successfully!");
      } catch (error: any) {
        toast.error(
          "Error: " + error.response?.data?.error || "Something went wrong"
        );
      }
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div
      className="sm:ml-[460px]  sm:w-[400px] h-auto bg-white shadow-2xl shadow-[#006991] mt-40 mb-30 flex flex-col items-center font-sans"
      style={{ borderRadius: "15px" }}
    >
      <div
        className="relative top-[-45px] h-25 w-25 bg-[#006991]"
        style={{ borderRadius: "50%" }}
      >
        <img src="/public/th.jpg" alt="Logo" style={{ borderRadius: "50%" }} />
      </div>

      <div
        className="items-center text-3xl mt-0 mb-3"
        style={{ color: "#006991" }}
      >
        Login Page
      </div>

      <form onSubmit={handleSubmit} className="m-3 flex flex-col">
        <label htmlFor="email" className="relative w-[300px]">
          <input
            type="text"
            placeholder="Email"
            className="rounded-lg focus-visible:outline-0 bg-gray-200 p-2 w-full text-lg pl-10 text-[#000] placeholder-gray-400" // pl-10 creates space for icon
            value={email}
            onChange={handleEmailChange}
          />
        </label>

        <label htmlFor="password" className="relative w-[300px] mt-5">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="*********"
            className="rounded-lg focus-visible:outline-0 bg-gray-200 p-2 w-full text-sm pl-10 pr-10" // pl-10 for left icon, pr-10 for right icon
            value={password}
            onChange={handlePasswordChange}
          />
          <i
            className={`fa-solid ${
              showPassword ? "fa-eye" : "fa-eye-slash"
            } absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm cursor-pointer`}
            onClick={togglePasswordVisibility}
          />
        </label>

        <button
          type="submit"
          className="bg-[#006991] rounded-lg text-xl text-center w-[300px] p-2 mb-5 text-white hover:bg-[#5c90a5] mt-5"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default LoginPage;
