import { SetStateAction, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [regNo, setRegNo] = useState("");
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [res, setRes] = useState("");

  const handleResChange = (e: { target: { value: SetStateAction<string> } }) => {
    setRes(e.target.value);
  };

  const handleRegNoChange = (e: { target: { value: SetStateAction<string> } }) => {
    setRegNo(e.target.value);
  };

  const handlePassChange = (e: { target: { value: SetStateAction<string> } }) => {
    setPass(e.target.value);
  };

  const handleNewPassChange = (e: { target: { value: SetStateAction<string> } }) => {
    setNewPass(e.target.value);
  };

  const validateFields = () => {
    if (!regNo || !pass || !newPass || !res) {
      toast.error("The fields can't be empty.");
      return false;
    }
    if (regNo.length !== 9) {
      toast.error("The Reg No must be exactly 9 characters.");
      return false;
    }
    if (pass.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return false;
    }
    if (pass !== newPass) {
      toast.error("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (validateFields()) {
      toast.success("You have successfully created an account!");
      setRegNo("");
      setNewPass("");
      setPass("");
      setRes("");
    }
  };

  return (
    <div className="mt-14 ml-80 w-[700px] flex flex-col md:flex-row rounded-xl shadow-xl shadow-blue-500/30">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center border-2 border-[#006991] rounded-t-xl md:rounded-l-xl md:rounded-tr-none p-4">
        <div className="text-[#006991] text-5xl font-serif mb-10">UR Connect</div>
        <div className="w-72 h-72">
          <img src="/public/ur.jpg" alt="Ur-logo" className="w-full h-full object-contain" />
        </div>
      </div>

      <form className="w-full md:w-1/2 bg-[#006991] rounded-b-xl  md:rounded-r-xl md:rounded-bl-none p-6 flex flex-col items-center space-y-4" onSubmit={handleSubmit}>
        <div className="text-white text-4xl font-serif">Student Page</div>
        <div className="text-white text-2xl font-serif">Sign Up</div>

        <input className="w-full px-4 py-2 text-gray-700 focus-visible:outline-0 rounded-lg bg-white" type="text" placeholder="Reg No" value={regNo} onChange={handleRegNoChange} />

        <select name="Questions" id="secret-quest" className="w-full px-4 py-2 text-gray-700 rounded-lg focus-visible:outline-0 bg-white">
          <option value="">Select a security question</option>
          <option value="1">What is your hobby?</option>
          <option value="2">When is your birthday?</option>
          <option value="3">Who is your role model?</option>
          <option value="4">What is your middle name?</option>
        </select>

        <input type="text" placeholder="Answer" className="w-full px-4 py-2 text-gray-700 rounded-lg focus-visible:outline-0 bg-white" value={res} onChange={handleResChange} />

        <input className="w-full px-4 py-2 text-gray-700 focus-visible:outline-0 rounded-lg bg-white" type="password" placeholder="Enter Password" value={pass} onChange={handlePassChange} />

        <input className="w-full px-4 py-2 focus-visible:outline-0 text-gray-700 rounded-lg bg-white" type="password" placeholder="Confirm Password" value={newPass} onChange={handleNewPassChange} />

        <button type="submit" className="w-full py-2 bg-transparent text-white border border-white rounded-lg  hover:bg-white/20 hover:text-white transition duration-300">Sign Up</button>

        <a href="/login" className="text-white ml-60 hover:underline">Sign In</a>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default SignUp;
