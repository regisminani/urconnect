import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPageAdmin = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    otherName: "",
    staffEmail: "",
    role: "",
    college: "",
    school: "",
    department: "",
    gender: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate Inputs
  const validateFields = () => {
    if (!formData.staffEmail) {
      toast.error("Staff Email is required.");
      return false;
    }
    return true;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      toast.success("Account created successfully!");
    }
  };

  return (
    <div className="ml-70 mt-20 mb-10 w-[700px] h-auto flex rounded-10xl relative shadow-xl shadow-blue-500/30">
      {/* Left Side */}
      <div
        className="w-1/2 flex flex-col items-center justify-center border-2"
        style={{ borderColor: "#006991", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}
      >
        <div style={{ color: "#006991" }} className="text-4xl text-center font-serif">
          UR Connect
        </div>
        <div className="h-72 w-72">
          <img src="/public/ur.jpg" alt="Ur-logo" className="w-full h-full object-contain mt-8" />
        </div>
      </div>

      {/* Right Side - Account Creation Form */}
      <form
        style={{ backgroundColor: "#006991", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}
        className="w-1/2 p-6 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="text-white text-4xl mt-4 font-serif">Create Account</div>
        
        {/* Form Grid */}
        <div className="grid grid-cols-2 gap-4 w-full mt-4">
          <input className="p-2 rounded-lg bg-white text-gray-700" type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
          <input className="p-2 rounded-lg bg-white text-gray-700" type="text" name="otherName" placeholder="Other Name" value={formData.otherName} onChange={handleChange} />
          <input className="p-2 rounded-lg bg-white text-gray-700" type="email" name="staffEmail" placeholder="Staff Email (Required)" value={formData.staffEmail} onChange={handleChange} required />
          <select className="p-2 rounded-lg bg-white text-gray-700" name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="lecturer">Lecturer</option>
            <option value="dean">Dean</option>
            <option value="hod">HOD</option>
            <option value="principal">Principal</option>
          </select>
          <input className="p-2 rounded-lg bg-white text-gray-700" type="text" name="college" placeholder="College" value={formData.college} onChange={handleChange} />
          <input className="p-2 rounded-lg bg-white text-gray-700" type="text" name="school" placeholder="School" value={formData.school} onChange={handleChange} />
          <input className="p-2 rounded-lg bg-white text-gray-700" type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} />
          <select className="p-2 rounded-lg bg-white text-gray-700" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full mt-6 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-white/20 transition duration-300">
          Register
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default LoginPageAdmin;
