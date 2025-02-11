import { useNavigate } from "react-router-dom";

const ChoicePage = () => {
  const navigate = useNavigate();

  // Function to handle student login
  const handleStudentLogin = () => {
    navigate("/login");  // Navigate to the student login page
  };

  // Function to handle admin login
  const handleAdminLogin = () => {
    navigate("/loginadmin");  // Navigate to the admin login page
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[400px] h-[300px] bg-white shadow-xl rounded-lg p-6 flex flex-col items-center justify-around">
        
        <div className="text-xl text-center mb-8 text-gray-700">
          Please choose your role:
        </div>

        {/* Button to continue as Student */}
        <button
          onClick={handleStudentLogin}
          className="w-full py-3 mb-4 bg-blue-900 text-white text-lg rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Continue as Student
        </button>

        {/* Button to continue as Admin */}
        <button
          onClick={handleAdminLogin}
          className="w-full py-3 mb-4 bg-blue-900 text-white text-lg rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Continue as Admin
        </button>
      </div>
    </div>
  );
};

export default ChoicePage;
