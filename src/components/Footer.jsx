import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex flex-col md:flex-row text-center text-2xl p-6 md:p-10 bg-white">
          <div className="w-full md:w-1/3 md:pr-6 md:border-r border-gray-300 mb-6 md:mb-0">
            <p className="mb-5 text-[#555]">
              Trusted by 2,000+ <br /> Companies Worldwide
            </p>
          </div>
          <div className="w-full md:w-2/3 flex flex-wrap justify-center gap-6">
            <FontAwesomeIcon icon={faGoogle} size="3x" />
            <FontAwesomeIcon icon={faFacebook} size="3x" />
            <FontAwesomeIcon icon={faAirbnb} size="3x" />
            <FontAwesomeIcon icon={faAmazon} size="3x" />
          </div>
        </div>

        <div className="bg-[#D28C8C]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 px-6">
            <div>
              <div className="flex gap-2 font-bold text-sm items-center">
                <img src={logo} className="w-10 h-10" alt="Learn Tech Hub" />
                <p>Learn Tech Hub</p>
              </div>
              <p className="mt-2 text-base md:text-xl">
                Empowering Nigerians with skills that set them apart in the
                global market.
              </p>
            </div>

            <div>
              <ul className="text-base md:text-xl font-bold space-y-2">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/features">Features</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="text-base md:text-xl font-bold space-y-2">
                <li>Contact</li>
                <li>(+234) 81 000 007 61</li>
                <li>learntechhub@gmail.com</li>
              </ul>
              <div className="mt-5">
                <p className="font-bold">Join Our Community</p>
                <div className="flex gap-4 mt-2">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-8 px-6 pb-6 text-sm md:text-base border-t border-gray-50 p-4">
            <div className="flex gap-6">
              <span>Terms of Service</span>
              <span>Privacy Policy</span>
            </div>
            <div className="mt-4 md:mt-0">
              2025 Learn Tech Hub © All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
