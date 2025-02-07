import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Ensure it's imported from 'react-router-dom'
import "./index.css";
import App from "./App.jsx";
import AuthContext from "./components/AuthContext/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  
    <BrowserRouter>
    <AuthContext>
    <App />
    </AuthContext>
    </BrowserRouter>
  // </StrictMode>
);
