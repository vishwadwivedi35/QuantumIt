import { useState } from "react";
import { registerUser } from "../services/authService"; // Import API function
import "../styles/RegistrationPage.css";
import { FaUser, FaLock, FaEnvelope, FaCalendarAlt } from "react-icons/fa"; //took gpt's help with it

const RegistrationPage = ({ onLoginClick }) => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ fullName, dob, email, password });
      alert("Registration Successful! Please login.");
      onLoginClick();
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <div className="wave-background"></div>
        <button className="register-banner">REGISTER</button>

        <div className="avatar-container">
          <div className="avatar">
            <FaUser className="avatar-icon" />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-icon">
              <FaUser />
            </div>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <FaCalendarAlt />
            </div>
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className="date-input"
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <FaEnvelope />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <FaLock />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="register-button">
            REGISTER
          </button>

          <div className="login-link">
            Already have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onLoginClick();
              }}
            >
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
