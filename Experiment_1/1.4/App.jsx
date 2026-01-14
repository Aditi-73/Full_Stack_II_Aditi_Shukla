import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

function FormApp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Simple Form SPA
        </h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "1rem",
                border: "2px solid #ddd",
                borderRadius: "5px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "1rem",
                border: "2px solid #ddd",
                borderRadius: "5px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              Phone:
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "1rem",
                border: "2px solid #ddd",
                borderRadius: "5px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              Message:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "1rem",
                border: "2px solid #ddd",
                borderRadius: "5px",
                boxSizing: "border-box",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "1.1rem",
              cursor: "pointer",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Submit
          </button>
        </form>

        {submittedData && (
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              backgroundColor: "#e8f5e9",
              borderRadius: "5px",
              border: "2px solid #4CAF50",
            }}
          >
            <h2 style={{ marginBottom: "15px", color: "#2e7d32" }}>
              Submitted Data:
            </h2>
            <p style={{ marginBottom: "8px" }}>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p style={{ marginBottom: "8px" }}>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p style={{ marginBottom: "8px" }}>
              <strong>Phone:</strong> {submittedData.phone}
            </p>
            <p style={{ marginBottom: "8px" }}>
              <strong>Message:</strong> {submittedData.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormApp />
  </StrictMode>
);
