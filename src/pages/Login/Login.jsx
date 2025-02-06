import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext"; // Import AuthContext
import { useNavigate } from "react-router-dom"; // Navigation ke liye

const Login = () => {
  const { login } = useContext(AuthContext); // Context se login function le rahe hain
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Navigation ke liye

  const handleLogin = () => {
    if (email && password) {
      login(); // User ko login kar rahe hain
      navigate("/signup"); // Signup page pe redirect
    } else {
      alert("Please enter email and password!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login Page
        </h2>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
