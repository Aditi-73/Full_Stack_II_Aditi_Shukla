import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Simple Counter SPA</h1>
      <h2 style={{ fontSize: "3rem", margin: "20px" }}>{count}</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "10px 20px",
            fontSize: "1.2rem",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: "10px 20px",
            fontSize: "1.2rem",
            cursor: "pointer",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Counter />
  </StrictMode>
);
