import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ScrollToTop from "react-scroll-to-top";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <ScrollToTop smooth color="white" style={{backgroundColor: '#3882F6', display: 'flex', alignItems: 'center', justifyContent: 'center'}}/>
    </ThemeProvider>
  </StrictMode>
);
