import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="flex text-center text-2xl p-10 bg-white">
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
      </footer>
    </>
  );
};

export default Footer;
