import React, { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const AuthContextValue = createContext();

const AuthContext = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // ✅ Check if user is already logged in
    useEffect(() => {
        const loggedUser = localStorage.getItem('UserLogin');
        if (loggedUser) {
            setUser(JSON.parse(loggedUser));
        }
    }, []);

    // ✅ Signup Function
    const signup = (data) => {
        const userStringData = localStorage.getItem('UserRegistration');
        const registrationData = userStringData ? JSON.parse(userStringData) : [];

        const userExist = registrationData.some((user) => user.email === data.email);

        if (userExist) {
            toast.error('User already exists');
        } else {
            const updatedUsers = [...registrationData, data];
            localStorage.setItem('UserRegistration', JSON.stringify(updatedUsers));
            toast.success('User created successfully! Redirecting to login page...');
            navigate('/login');
        }
    };

    // ✅ Login Function
    const login = (data) => {
        const userStringData = localStorage.getItem('UserRegistration');
        const registrationData = userStringData ? JSON.parse(userStringData) : [];

        let availableUser = registrationData.find((user) => user.email === data.email);

        if (availableUser) {
            if (data.password === availableUser.password) {
                localStorage.setItem('UserLogin', JSON.stringify({
                    name: availableUser.name,
                    email: availableUser.email
                }));
                setUser(availableUser);
                toast.success("Login successful! Redirecting...");
                navigate('/');
            } else {
                toast.error('Password is incorrect');
            }
        } else {
            toast.error("User not found! Please sign up.");
        }
    };

    return (
        <AuthContextValue.Provider value={{ signup, login, user, setUser }}>
            {children}
        </AuthContextValue.Provider>
    );
};

export default AuthContext;
