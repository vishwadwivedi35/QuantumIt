import { useEffect, useState } from "react";
import { getDashboard } from "../services/authService";
import "../styles/DashboardPage.css";
import {
  FaSignOutAlt,
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaTable,
} from "react-icons/fa"; //took gpt's help with it
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/");
        return;
      }

      try {
        const response = await getDashboard(token);
        setUserData(response.user);
      } catch (error) {
        alert("Session expired. Please log in again.");
        handleLogout();
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); //when logging out, redirect here
  };

  if (!userData) {
    return <h2 className="loading-text">Loading...</h2>; //dummy loader
  }

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="welcome-message">Welcome, {userData.fullName}</div>
        <button className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </nav>

      <main className="dashboard-content">
        <section className="user-info-section">
          <div className="user-info-card">
            <h2>User Information</h2>
            <div className="user-info-item">
              <FaUser className="user-info-icon" />
              <div>
                <span className="info-label">Full Name</span>
                <span className="info-value">{userData.fullName}</span>
              </div>
            </div>
            <div className="user-info-item">
              <FaEnvelope className="user-info-icon" />
              <div>
                <span className="info-label">Email</span>
                <span className="info-value">{userData.email}</span>
              </div>
            </div>
            <div className="user-info-item">
              <FaCalendarAlt className="user-info-icon" />
              <div>
                <span className="info-label">Date of Birth</span>
                <span className="info-value">
                  {new Date(userData.dob).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="table-section">
          <div className="table-card">
            <div className="table-header">
              <h2>
                <FaTable /> User Data
              </h2>
            </div>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{userData.fullName}</td>
                    <td>{userData.email}</td>
                    <td>{new Date(userData.dob).toLocaleDateString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
