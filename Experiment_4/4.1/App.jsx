import React, { createContext, useContext, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

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

    function SampleCard() {
    return (
        <div className="card">
        <h2>Preview Area</h2>
        <p>This area shows how the current theme affects UI elements.</p>
        <button className="primary">Primary Action</button>
        <button className="secondary">Secondary Action</button>
        </div>
    );
    }

    function App() {
    return (
        <div className="app-root">
        <header className="header">
            <h1>Theme Toggle (React Context)</h1>
            <ThemeToggle />
        </header>
        <main>
            <SampleCard />
        </main>
        <footer className="footer">Simple theme switcher for beginners</footer>
        </div>
    );
    }

    createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
