import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="logo text-2xl font-bold text-gray-800">
          <Link to="/">Online-Shopping</Link>
        </div>

        {/* Desktop Navigation */}
        <nav>
          <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-orange-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="hover:text-orange-500 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="hover:text-orange-500 transition duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/Login"
                className="hover:text-orange-500 transition duration-300"
              >
                Login
              </Link>
            </li>   
            <li>
              {/* <Link
                to="/Signup"
                className="hover:text-orange-500 transition duration-300"
              >
                Sign-Up
              </Link> */}
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-orange-500 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-3 p-4 text-gray-600 font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-orange-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="hover:text-orange-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="hover:text-orange-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/Login"
                className="hover:text-orange-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/Signup"
                className="hover:text-orange-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign-Up
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
