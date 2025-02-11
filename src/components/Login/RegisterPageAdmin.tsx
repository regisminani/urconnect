import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Define types for form data and response structure
interface FormData {
  firstName: string;
  otherName: string;
  staffEmail: string;
  password: string;
  role: string;
  college: string;
  school: string;
  department: string;
  gender: string;
}

interface ApiResponse {
  message: string;
  status: string;
}

const RegisterPageAdmin = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    otherName: "",
    staffEmail: "",
    password: "",
    role: "",
    college: "",
    school: "",
    department: "",
    gender: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate Inputs
  const validateFields = (): boolean => {
    if (!formData.staffEmail) {
      toast.error("Staff Email is required.");
      return false;
    }
    if (!formData.password) {
      toast.error("Password is required.");
      return false;
    }
    if (!formData.role) {
      toast.error("Role is required.");
      return false;
    }
    return true;
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFields()) {
      const payload: FormData = {
        firstName: formData.firstName,
        otherName: formData.otherName,
        staffEmail: formData.staffEmail,
        password: formData.password,
        role: formData.role,
        college: formData.college,
        school: formData.school,
        department: formData.department,
        gender: formData.gender,
      };

      setLoading(true); // Set loading to true while waiting for the request

      try {
        const response = await axios.post(
          "https://ur-connect.onrender.com/api/staff/register",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        );

        const data: ApiResponse = response.data; // Get the response data
        console.log("Response Data:", data); // Log the response to check for errors

        if (response.status === 200) {
          toast.success("Account created successfully!");
          // Reset form data
          setFormData({
            firstName: "",
            otherName: "",
            staffEmail: "",
            password: "",
            role: "",
            college: "",
            school: "",
            department: "",
            gender: "",
          });
        } else if (data.status === "error" && data.message.includes("already exists")) {
          toast.error("This email is already registered.");
        } else {
          toast.error(data.message || "Account creation failed.");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
        console.error("Error:", error);
      } finally {
        setLoading(false); // Set loading to false when the request is done
      }
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
          <input
            className="p-2 rounded-lg bg-white text-gray-700"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            className="p-2 rounded-lg bg-white text-gray-700"
            type="text"
            name="otherName"
            placeholder="Other Name"
            value={formData.otherName}
            onChange={handleChange}
          />
          <input
            className="p-2 rounded-lg bg-white text-gray-700"
            type="email"
            name="staffEmail"
            placeholder="Staff Email (Required)"
            value={formData.staffEmail}
            onChange={handleChange}
            required
          />
          <input
            className="p-2 rounded-lg bg-white text-gray-700"
            type="password"
            name="password"
            placeholder="Password (Required)"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <select
            className="p-2 rounded-lg bg-white text-gray-700"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="Lecturer">Lecturer</option>
            <option value="Dean">Dean</option>
            <option value="HOD">HOD</option>
            <option value="Principal">Principal</option>
          </select>
          <input
            className="p-2 rounded-lg bg-white text-gray-700"
            type="text"
            name="college"
            placeholder="College"
            value={formData.college}
            onChange={handleChange}
          />
          <input
            className="p-2 rounded-lg bg-white text-gray-700"
            type="text"
            name="school"
            placeholder="School"
            value={formData.school}
            onChange={handleChange}
          />
          <input
            className="p-2 rounded-lg bg-white text-gray-700"
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
          />
          <select
            className="p-2 rounded-lg bg-white text-gray-700"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 py-2 bg-transparent border border-white text-white rounded-lg hover:bg-white/20 transition duration-300"
        >
          {loading ? "Creating Account..." : "Register"}
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default RegisterPageAdmin;
