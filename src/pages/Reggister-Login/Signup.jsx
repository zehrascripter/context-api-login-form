import React, { useContext, useState } from 'react';
import { AuthContextValue } from '../../components/AuthContext/AuthContext';
import { Link} from 'react-router-dom';

const Signup = () => {
    const { signup } = useContext(AuthContextValue);

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!inputs.name || !inputs.email || !inputs.password) {
            alert("Please fill in all fields");
            return;
        }
        signup(inputs);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h1>

                <div className="space-y-4">
                    <input 
                        type="text" 
                        name="name" 
                        onChange={handleInput} 
                        placeholder="Full Name" 
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
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
                        Sign Up
                    </button>
                </div>

                <p className="text-center text-gray-600 mt-4">
                    Already have an account? 
                    <Link to="/login" className="text-orange-500 font-medium hover:underline"> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
