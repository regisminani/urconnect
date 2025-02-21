import { SetStateAction, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [option, setOption] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [visible, setVisible]= useState(false)

  const handleEmailChange = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e: { target: { value: SetStateAction<string> } }) => {
    setPass(e.target.value);
  };

  const handleNewPassChange = (e: { target: { value: SetStateAction<string> } }) => {
    setNewPass(e.target.value);
  };

  const handleOptionChange = (e: { target: { value: SetStateAction<string> } }) => {
    setOption(e.target.value);
  };

  const validateFields = () => {
    if (email.length === 0) {
      toast.info("Please fill in the email field.");
      return false;
    }
    if (pass.length === 0 || newPass.length === 0) {
      toast.info("Please fill in both password fields.");
      return false;
    }
    if (pass !== newPass) {
      toast.error("The passwords you entered do not match.");
      return false;
    }
    if (pass.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (validateFields()) {
      toast.success("You have successfully reset your password!");
      setEmail("");
      setPass("");
      setNewPass("");
    }
  };

  const togglePasswordVisibility = () => {
    setVisibility((prevState) => !prevState);
  };

  const toggleNewPassVisibility = () =>{
    setVisible((prevState)=>!prevState)
  }

  return (
    <div className="ml-[460px] w-[400px] h-auto bg-white shadow-2xl shadow-[#006991] mt-35 flex flex-col items-center font-sans mb-7" style={{ borderRadius: "15px" }}>
      <div className="relative top-[-45px] h-25 w-25 bg-[#006991]" style={{ borderRadius: "50%" }}>
        <img src="/public/th.jpg" alt="Logo" style={{ borderRadius: "50%" }} />
      </div>

      <div className="items-center text-3xl mt-0 mb-5 text-[#006991]">
        Reset Password
      </div>

      <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        {/* Email Input */}
        <label htmlFor="email" className="relative w-[300px]">
          <input
            type="text"
            placeholder="Email"
            className="rounded-lg focus-visible:outline-0 bg-gray-200 p-2 w-full text-lg pl-10"
            value={email}
            onChange={handleEmailChange}
          />
          <i className="fa-solid fa-user absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
        </label>

        {/* Security Question Dropdown */}
        <select
          className="p-2 w-[300px] rounded-lg text-[#006991] focus-visible:outline-0 bg-gray-200 mt-5"
          onChange={handleOptionChange}
          value={option}
        >
          <option>What is your middle name?</option>
          <option>Who is the greatest football player?</option>
          <option>What is your favorite film genre?</option>
        </select>

        {/* New Password Input */}
        <label htmlFor="new-password" className="relative w-[300px] mt-5">
          <input
            type={visibility ? "text" : "password"}
            placeholder="New Password"
            className="rounded-lg focus-visible:outline-0 bg-gray-200 p-2 w-full text-lg pl-10 pr-10"
            value={pass}
            onChange={handlePassChange}
          />
          <i
            className={`fa-solid ${visibility ? "fa-eye" : "fa-eye-slash"} absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm cursor-pointer`}
            onClick={togglePasswordVisibility}
          />
        </label>

        {/* Confirm Password Input */}
        <label htmlFor="confirm-password" className="relative w-[300px] mt-5">
          <input
            type={visible ? "text" : "password"}
            placeholder="Confirm Password"
            className="rounded-lg focus-visible:outline-0 bg-gray-200 p-2 w-full text-lg pl-10 pr-10"
            value={newPass}
            onChange={handleNewPassChange}
          />
          <i
            className={`fa-solid ${visible ? "fa-eye" : "fa-eye-slash"} absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm cursor-pointer`}
            onClick={toggleNewPassVisibility}
          />
        </label>

        {/* Reset Button */}
        <button type="submit" className="bg-[#006991] rounded-lg text-xl text-center w-[300px] p-2 mb-1 text-white hover:bg-[#5c90a5] mt-5">
          Reset Password
        </button>

        <a href="/login" className=" text-end text-gray-600 hover:text-[#006991] text-lg mb-7 ">
          Sign in
        </a>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ForgotPassword;
