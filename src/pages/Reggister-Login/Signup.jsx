// Signup.js
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContextValue } from '../../components/AuthContext/AuthContext';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { signup } = useContext(AuthContextValue);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            data.image = reader.result;
            signup(data);
        };
        if (data.image[0]) {
            reader.readAsDataURL(data.image[0]);
        } else {
            signup(data);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input 
                        type="text" 
                        {...register("name", { required: true })} 
                        placeholder="Full Name" 
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                    <input 
                        type="email" 
                        {...register("email", { required: true })} 
                        placeholder="Email Address" 
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                    <input 
                        type="password" 
                        {...register("password", { required: true })} 
                        placeholder="Password" 
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                    <input 
                        type="file" 
                        {...register("image")} 
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    />
                    <button 
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-all shadow-md"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account? 
                    <Link to="/login" className="text-orange-500 font-medium hover:underline"> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
