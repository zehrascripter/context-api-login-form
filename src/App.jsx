import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom"; // Navigate import kiya
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { AuthProvider } from "./context/AuthContext"; // AuthProvider import kiya
import AuthContext from "./context/AuthContext"; // AuthContext import kiya

const App = () => {
  const { isLoggedIn } = useContext(AuthContext); // Login state ko use kar rahe hain

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Authentication Logic */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/signup" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Signup /> : <Navigate to="/login" />}
        />

        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
    </>

  );
};

export default App;
