import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "border-b-2 border-green-700 pb-1 text-green-700 font-bold"
      : "hover:border-b-2 hover:border-green-700 pb-1 text-green-700";

  return (
    <>
      <header className="flex justify-between items-center pl-6 pr-6 md:pl-16 md:pr-16 bg-[#FFFDD0] relative">
        <div className="flex justify-between gap-[5px] items-center font-bold text-[14px]">
          <img src={logo} className="w-10" alt="Logo" />
          <p>Learn Tech Hub</p>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex gap-10 items-center text-green-700">
            <li>
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/features" className={navLinkClasses}>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className={navLinkClasses}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className={navLinkClasses}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex gap-5 items-center">
          <NavLink to="/log-in" className="text-sm text-[#333]">
            Log-in
          </NavLink>
          <NavLink
            to="/sign-up"
            className="px-6 py-2 rounded-md text-sm bg-black text-white"
          >
            Sign Up
          </NavLink>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#FFFDD0] flex flex-col gap-4 p-6 md:hidden z-50">
            <NavLink to="/" onClick={toggleMenu} className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink
              to="/features"
              onClick={toggleMenu}
              className={navLinkClasses}
            >
              Features
            </NavLink>
            <NavLink
              to="/about-us"
              onClick={toggleMenu}
              className={navLinkClasses}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us"
              onClick={toggleMenu}
              className={navLinkClasses}
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/log-in"
              onClick={toggleMenu}
              className="text-[#333] font-medium"
            >
              Log-in
            </NavLink>
            <NavLink
              to="/sign-up"
              onClick={toggleMenu}
              className="px-6 py-2 rounded-md text-sm bg-black text-white"
            >
              Sign Up
            </NavLink>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
