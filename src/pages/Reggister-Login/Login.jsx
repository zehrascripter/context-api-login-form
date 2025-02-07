import React, { useContext, useEffect, useState } from 'react';
import { AuthContextValue } from '../../components/AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const { login, user } = useContext(AuthContextValue);

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!inputs.email || !inputs.password) {
            toast.error("Please fill in all fields");
            return;
        }
        login(inputs);
    };

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h1>

                <div className="space-y-4">
                    <input 
                        type="email" 
                        name="email" 
                        onChange={handleInput} 
                        placeholder="Email Address" 
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                    <input 
                        type="password" 
                        name="password" 
                        onChange={handleInput} 
                        placeholder="Password" 
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />

                    <button 
                        onClick={handleSubmit}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-all shadow-md"
                    >
                        Login
                    </button>
                </div>

                <p className="text-center text-gray-600 mt-4">
                    Don't have an account? 
                    <Link to="/signup" className="text-orange-500 font-medium hover:underline"> Signup</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
