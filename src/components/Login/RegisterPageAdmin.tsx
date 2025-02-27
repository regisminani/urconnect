import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

interface FormData {
  [key: string]: string; // Allows dynamic keys
}

const RegisterPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    otherName: "",
    email: "",
    password: "",
    username: "",
    regNo: "",
    college: "",
    school: "",
    department: "",
    gender: "",
    level: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://ur-connect.onrender.com/api/user/register", formData);
      if (response.status === 201) {
        toast.success("Account created successfully!");
        setTimeout(() => navigate("/loginadmin"), 1000);
      }
    } catch (error:any) {
      toast.error(error.response?.data?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ml-[100px] w-[600px] h-auto bg-white shadow-2xl shadow-[#006991] mt-20 mb-20 flex flex-col items-center font-sans" style={{ borderRadius: "15px" }}>
      <div className="relative top-[-30px] h-20 w-20 bg-[#006991] flex justify-center items-center" style={{ borderRadius: "50%" }}>
        <img src="/public/th.jpg" alt="Logo" className="h-full w-full rounded-full" />
      </div>

      <div className="items-center text-2xl mt-0 mb-3" style={{ color: "#006991" }}>
        Create Account
      </div>

      <form onSubmit={handleSubmit} className="m-3 grid grid-cols-1 gap-3">
        {Object.keys(formData).map((key) => (
          <label key={key} className="relative w-[250px]">
            <input
              type={key === "password" ? "password" : "text"}
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              className="rounded-lg focus-visible:outline-0 bg-gray-200 p-2 w-full text-lg"
              value={formData[key]}
              onChange={handleChange}
            />
          </label>
        ))}

        <div className="flex justify-center">
          <button type="submit" className="bg-[#006991] rounded-lg text-lg text-center w-[250px] p-2 text-white hover:bg-[#5c90a5] mt-3" disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </div>
      </form>

      <div className="text-gray-600 mb-5">
        <a href="/loginadmin" className="text-md hover:text-[#006991]">Already have an account? Login</a>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default RegisterPage;
