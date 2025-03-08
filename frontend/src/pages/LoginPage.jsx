import { useState } from "react";
import { loginUser } from "../services/authService";
import "../styles/LoginPage.css";
import { FaUser, FaLock } from "react-icons/fa"; //took gpt's help with it

const LoginPage = ({ onRegisterClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error this way

    try {
      const response = await loginUser({ email, password });
      localStorage.setItem("token", response.token); //store token this way
      localStorage.setItem("user", JSON.stringify(response.user));

      alert("Login Successful!");
      window.location.href = "/dashboard"; // send to dashbord
    } catch (error) {
      setError(error.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="wave-background"></div>
        <button className="sign-in-button">SIGN IN</button>

        <div className="avatar-container">
          <div className="avatar">
            <FaUser className="avatar-icon" />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}{" "}
          <div className="input-group">
            <div className="input-icon">
              <FaUser />
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
          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-password">
              Forgot your password?
            </a>
          </div>
          <button type="submit" className="login-button">
            LOGIN
          </button>
          <div className="register-link">
            Don't have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onRegisterClick();
              }}
            >
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
