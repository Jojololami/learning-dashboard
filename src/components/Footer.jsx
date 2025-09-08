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
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex text-center text-2xl p-10 bg-white">
          <div className="w-1/3 pr-6 border-r border-gray-300">
            <p className="mb-5 text-[#555]">
              Trusted by 2,000+ <br /> Companies Worldwide
            </p>
          </div>
          <div className="w-2/3">
            <span className="mx-4">
              <FontAwesomeIcon
                icon={faGoogle}
                size="4x"
                className="pr-8 pt-8 pb-8 ml-auto justify-end"
                alt="google_icon"
              />
            </span>
            <span className="mx-4">
              <FontAwesomeIcon
                icon={faFacebook}
                size="4x"
                className="pr-8 pt-8 pb-8 ml-auto justify-end"
                alt="facebook_icon"
              />
            </span>
            <span className="mx-4">
              <FontAwesomeIcon
                icon={faAirbnb}
                size="4x"
                className="pr-8 pt-8 pb-8 ml-auto justify-end"
                alt="airbnb_icon"
              />
            </span>
            <span className="mx-4 ">
              <FontAwesomeIcon
                icon={faAmazon}
                size="4x"
                className="pr-8 pt-8 pb-8 ml-auto justify-end"
                alt="amazon_icon"
              />
            </span>
          </div>
        </div>

        <div className="bg-[#D28C8C]">
          <div className="grid grid-cols-3 pt-12 pl-12 pr-8">
            <div className="col-span-1">
              <div className="flex gap-[10px] font-bold text-[14px]">
                <img src={logo} className="w-10 h-10" alt="Learn Tech Hub" />
                <p className="mt-3">Learn Tech Hub</p>
              </div>
              <p className="mt-2 text-xl">
                Empowering Nigerians with skills that set them apart in the
                global market.
              </p>
            </div>

            <div id="contact_and_others" className="grid col-span-2 text-left">
              <div id="firstgridlist" className="col-start-3 col-end-4 pr-24 ">
                <ul className="text-xl font-bold space-y-4">
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
              <div id="secondgridlist" className="col-start-4 col-end-5 ">
                <ul className="font-bold space-y-2">
                  <li className="text-xl font-bold">Contact</li>
                  <li>(+234) 81 000 007 61</li>
                  <li>learntechhub@gmail.com</li>
                </ul>

                <div className="mt-5">
                  <p className="text-xl font-bold ">Join Our Community</p>
                  <ul className="flex">
                    <li>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        size="2x"
                        className="pr-8 pt-8 pb-8 ml-auto justify-end"
                        alt="facebook_icon"
                      />
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="pr-8 pt-8 pb-8 ml-auto justify-end"
                        alt="twitter_icon"
                      />
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="pr-8 pt-8 pb-8 ml-auto justify-end"
                        alt="instagram_icon"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div id="">
            <ul className="text-left flex gap-10 mt-12 pl-12 pb-6">
              <li className="pl-12">Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="border-t border-gray-50 p-4">
            <ul className="flex justify-center justify-between gap-[50px]">
              <li>2025 Learn Tech Hub &copy; .</li>
              <li>All Rights Reserved.</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
