import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const lightTheme = {
    backgroundColor: "#ffffff",
    color: "#000000",
    buttonBg: "#4CAF50",
    buttonHoverBg: "#45a049",
    cardBg: "#f9f9f9",
    border: "#ddd",
  };

  const darkTheme = {
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    buttonBg: "#2196F3",
    buttonHoverBg: "#0b7dda",
    cardBg: "#2d2d2d",
    border: "#444",
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.color,
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Theme Toggle SPA</h1>

      <div
        style={{
          backgroundColor: currentTheme.cardBg,
          padding: "40px",
          borderRadius: "10px",
          border: `2px solid ${currentTheme.border}`,
          textAlign: "center",
          maxWidth: "500px",
          transition: "all 0.3s ease",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          Current Theme: {theme === "light" ? "Light" : "Dark"}
        </h2>

        <p style={{ marginBottom: "30px", fontSize: "1.1rem" }}>
          Click the button below to switch between light and dark mode
        </p>

        <button
          onClick={toggleTheme}
          style={{
            padding: "15px 30px",
            fontSize: "1.2rem",
            cursor: "pointer",
            backgroundColor: currentTheme.buttonBg,
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = currentTheme.buttonHoverBg)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = currentTheme.buttonBg)
          }
        >
          Toggle Theme
        </button>
      </div>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: currentTheme.cardBg,
              border: `2px solid ${currentTheme.border}`,
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeToggle />
  </StrictMode>
);
