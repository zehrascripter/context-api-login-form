import { Route, Routes} from "react-router-dom"; // Navigate import kiya
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Signup from "./pages/Reggister-Login/Signup";
import Login from "./pages/Reggister-Login/Login";
import { Toaster } from "react-hot-toast";
import Cart from "./pages/Cart/Cart";


const App = () => {

  return (
    <>
    <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />

        {/* Authentication Logic */}
         {/* <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/signup" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Signup /> : <Navigate to="/login" />}
        /> */}

        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
    </>

  );
};

export default App;
