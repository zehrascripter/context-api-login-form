import { useContext } from "react";
import AuthContext from "../../context/AuthContext"; // Import AuthContext
import { useNavigate } from "react-router-dom"; // Navigation ke liye

const Signup = () => {
  const { logout } = useContext(AuthContext); // Context se logout function le rahe hain
  const navigate = useNavigate(); // Navigation ke liye

  const handleLogout = () => {
    logout(); // User ko logout kar rahe hain
    navigate("/login"); // Login page pe redirect kar rahe hain
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Signup Page
        </h2>
        <p className="text-gray-600 text-center mb-6">
          You are already logged in!
        </p>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Signup;
