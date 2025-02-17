import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import "./index.css";
import App from "./App.jsx";
import AuthContext from "./components/AuthContext/AuthContext.jsx";
import CartContext from "./components/CartContext/CartContext.jsx"; // ✅ Corrected import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartContext> {/* ✅ Use the Provider Component, not Context object */}
        <AuthContext>
          <App />
        </AuthContext>
      </CartContext>
    </BrowserRouter>
  </StrictMode>
);
