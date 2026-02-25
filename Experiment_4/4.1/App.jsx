import React, { createContext, useContext, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import lightBackground from "./BG/1.png";
import darkBackground from "./BG/2.png";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
        {children}
        </ThemeContext.Provider>
    );
    }

    function ThemeToggle() {
    const { theme, toggle } = useContext(ThemeContext);
    return (
        <button className="toggle" onClick={toggle} aria-label="Toggle theme">
        {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>
    );
    }

    function App() {
    const { theme } = useContext(ThemeContext);
    const backgroundImage = theme === "light" ? lightBackground : darkBackground;

    return (
        <div className="app-root" style={{ "--bg-image": `url(${backgroundImage})` }}>
        <main className="center-screen">
            <ThemeToggle />
        </main>
        </div>
    );
    }

    createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
