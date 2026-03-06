import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function ControlledForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    address: "",
    state: "",
    skills: [],
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSkillChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      skills: checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
    alert("Form submitted successfully!");
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      address: "",
      state: "",
      skills: [],
    });
    setSubmittedData(null);
  };

  return (
    <div className="page">
      <div className="form-card">
        <h1>Controlled Form</h1>

        <form onSubmit={handleSubmit} onReset={handleReset} className="form">
          <label>
            First Name
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              required
            />
          </label>

          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              required
            />
          </label>

          <label>
            DOB
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          </label>

          <fieldset className="radio-group">
            <legend>Gender</legend>
            {[
              "Female",
              "Male",
              "Other",
            ].map((option) => (
              <label key={option} className="radio-option">
                <input
                  type="radio"
                  name="gender"
                  value={option}
                  checked={formData.gender === option}
                  onChange={handleChange}
                  required
                />
                {option}
              </label>
            ))}
          </fieldset>

          <label>
            Address
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              required
            />
          </label>

          <label>
            State
            <select name="state" value={formData.state} onChange={handleChange} required>
              <option value="">Select state/UT</option>
              <optgroup label="States">
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </optgroup>
              <optgroup label="Union Territories">
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
              </optgroup>
            </select>
          </label>

          <fieldset className="skills-group">
            <legend>Skills</legend>
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Python",
              "R",
            ].map((skill) => (
              <label key={skill} className="checkbox">
                <input
                  type="checkbox"
                  name="skills"
                  value={skill}
                  checked={formData.skills.includes(skill)}
                  onChange={handleSkillChange}
                />
                {skill}
              </label>
            ))}
          </fieldset>

          <div className="actions">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>

        {submittedData && (
          <div className="result">
            <h2>Submitted Data</h2>
            <p><strong>First Name:</strong> {submittedData.firstName}</p>
            <p><strong>Last Name:</strong> {submittedData.lastName}</p>
            <p><strong>DOB:</strong> {submittedData.dob}</p>
            <p><strong>Gender:</strong> {submittedData.gender}</p>
            <p><strong>Address:</strong> {submittedData.address}</p>
            <p><strong>State:</strong> {submittedData.state}</p>
            <p><strong>Skills:</strong> {submittedData.skills.join(", ") || "None"}</p>
          </div>
        )}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<ControlledForm />);
