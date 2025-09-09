import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import FeaturesPage from "./pages/FeaturesPage.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import CoursesPage from "./components/CoursesPage.jsx";
import AssignmentPage from "./components/AssignmentsPage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AssignmentsPage from "./components/AssignmentsPage.jsx";

function App() {
  const location = useLocation();

  const hideLayout = [
    "/log-in",
    "/sign-up",
    "/forgot-password",
    "/dashboard",
    "/profile",
    "/course",
    "/assignments",
  ].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/course" element={<CoursesPage />} />
        <Route path="/assignments" element={<AssignmentsPage />} />
      </Routes>
      {!hideLayout && <Footer />}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
