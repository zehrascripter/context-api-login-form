import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContextValue } from '../../components/AuthContext/AuthContext';
import toast from 'react-hot-toast';
import { ShoppingCart } from 'lucide-react';
import { Avatar, Badge } from 'antd';
import { CartContextValue } from '../CartContext/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useContext(AuthContextValue);
  const cartContextValue = useContext(CartContextValue);
  const { cartItems } = cartContextValue;
  
  const navigate = useNavigate();

  // ✅ Logout Function
  const handleLogout = () => {
    localStorage.removeItem('UserLogin');
    setUser(null);
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/" className="hover:text-orange-500 transition duration-300">🛍 Online-Shop</Link>
        </div>

        {/* Desktop Navigation */}
        <nav>
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
            <li><Link to="/" className="hover:text-orange-500 transition duration-300">Home</Link></li>
            <li><Link to="/About" className="hover:text-orange-500 transition duration-300">About</Link></li>
            <li><Link to="/Contact" className="hover:text-orange-500 transition duration-300">Contact</Link></li>

            {/* Cart Icon */}
            <div className="cart">
              <Link to="/cart" className="hover:text-orange-500 transition duration-300">
                <Badge count={cartItems.length}>
                  <ShoppingCart className='hover:text-orange-500 transition duration-300'/>
                </Badge>
              </Link>
            </div>

            {/* ✅ User Logged In: Show Image or Avatar */}
            {user ? (
              <li className="flex items-center gap-3 bg-gray-100 px-3 py-1 rounded-full shadow-md">
                {user.image ? (
                  <img 
                    src={user.image} 
                    alt="User" 
                    className="w-8 h-8 rounded-full border-2 border-orange-500 object-fit-contain"
                  />
                ) : (
                  <span className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                )}
                <button
                  onClick={() => {
                    handleLogout();
                    toast.success('Logout successful! Redirecting to login page...');
                  }}
                  className="hover:text-red-500 transition duration-300 font-medium text-sm"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li><Link to="/signup" className="hover:text-orange-500 transition duration-300">Signup</Link></li>
                <li><Link to="/login" className="hover:text-orange-500 transition duration-300 bg-orange-500 text-white px-4 py-1 rounded-md shadow-md hover:bg-orange-600">Login</Link></li>
              </>
            )}
          </ul>
        </nav>

        {/* ✅ Mobile Menu Button with Cart & User Image */}
        <div className="md:hidden flex items-center gap-3">
          {/* 🛒 Cart Icon (Mobile View) */}
          <Link to="/cart" className="hover:text-orange-500 transition duration-300 relative">
            <Badge count={cartItems.length}>
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-orange-500" />
            </Badge>
          </Link>

          {/* 🍔 Hamburger Icon */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-orange-500 focus:outline-none">
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* 🟠 User Avatar (Mobile View) */}
          {user && user.image ? (
            <img 
              src={user.image} 
              alt="User" 
              className="w-8 h-8 rounded-full border-2 border-orange-500"
            />
          ) : user ? (
            <span className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold">
              {user.name.charAt(0).toUpperCase()}
            </span>
          ) : null}
        </div>
      </div>

      {/* ✅ Mobile Navigation Menu */}
      {isMenuOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4">
          <li><Link to="/" className="hover:text-orange-500 transition duration-300">Home</Link></li>
          <li><Link to="/About" className="hover:text-orange-500 transition duration-300">About</Link></li>
          <li><Link to="/Contact" className="hover:text-orange-500 transition duration-300">Contact</Link></li>
          {user ? (
            <li className="flex flex-col items-center">
              <button onClick={handleLogout} className="text-red-500 mt-2">Logout</button>
            </li>
          ) : (
            <>
              <li><Link to="/signup" className="hover:text-orange-500 transition duration-300">Signup</Link></li>
              <li><Link to="/login" className="hover:text-orange-500 transition duration-300 bg-orange-500 text-white px-4 py-1 rounded-md shadow-md hover:bg-orange-600">Login</Link></li>
            </>
          )}
        </ul>
      )}
    </header>
  );
};

export default Header;
