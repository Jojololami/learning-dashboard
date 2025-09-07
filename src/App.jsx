import { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import FeaturesPage from './pages/FeaturesPage.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import LogInPage from './pages/LogInPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';


function App () {
  return (
     <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
    <Footer />
     
     </>
  )
  
}


export default App;
