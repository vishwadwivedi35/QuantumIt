import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("login");

  const handleRegisterClick = () => setCurrentPage("register");
  const handleLoginClick = () => setCurrentPage("login");

  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Routes>
      <Route
        path="/"
        element={
          currentPage === "login" ? (
            <LoginPage onRegisterClick={handleRegisterClick} />
          ) : (
            <RegistrationPage onLoginClick={handleLoginClick} />
          )
        }
      />
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? (
            <DashboardPage />
          ) : (
            <LoginPage onRegisterClick={handleRegisterClick} />
          )
        }
      />
    </Routes>
  );
};

export default App;
