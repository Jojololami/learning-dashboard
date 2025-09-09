import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faHexagonNodes } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FaShieldAlt } from "react-icons/fa";

const FeaturesPage = () => {
  return (
    <>
      <div className="mb-2">
        <div className="flex justify-center mb-4 pt-8">
          <h3 className="pr-2 text-4xl text-center w-[500px] p-2 bg-white/80 border border-slate-500 rounded-3xl font-extrabold">
            Our <span className="text-[#D28C8C]">Available</span> Courses
          </h3>
        </div>

        <div className="bg-[#3b7d3b] flex flex-row items-center gap-12 py-10 px-8 border rounded-2xl w-[1100px] ml-24 mt-14 text-white">
          <FontAwesomeIcon icon={faCode} size="5x" className="p-4" />

          <div className="flex flex-col justify-center text-left">
            <h3 className="text-3xl text-black font-bold mb-4">
              Full-Stack Web Development
            </h3>
            <p className="text-lg mb-6 max-w-2xl">
              Learn both front-end (React, TailwindCSS) and back-end (Node.js,
              Express, MongoDB) to create dynamic, scalable, and secure
              websites. Perfect for beginners and aspiring software engineers.
            </p>
            <div>
              <Link to="/sign-up">
                <button className="bg-[#D28C8C] text-black w-56 h-16 rounded-xl">
                  Start Learning
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#3b7d3b] flex flex-row items-center gap-12 py-10 px-8 border rounded-2xl w-[1100px] ml-24 mt-14 text-white">
          <FontAwesomeIcon icon={faMobileScreenButton} size="5x" />

          <div className="flex flex-col justify-center text-left">
            <h3 className="text-3xl text-black font-bold mb-4">
              Mobile App Development
            </h3>
            <p className="text-lg mb-6 max-w-2xl">
              Gain hands-on experience with Flutter and React Native, and learn
              how to design, build, and publish mobile apps that impact millions
              of users.
            </p>
            <div>
              <Link to="/sign-up">
                <button className="bg-[#D28C8C] text-black w-56 h-16 rounded-xl">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#3b7d3b] flex flex-row items-center gap-12 py-10 px-8 border rounded-2xl w-[1100px] ml-24 mt-14 text-white">
          <FontAwesomeIcon icon={faHexagonNodes} size="5x" className="p-4" />

          <div className="flex flex-col justify-center text-left">
            <h3 className="text-3xl text-black font-bold mb-4">
              Data Science & Artificial Intelligence
            </h3>
            <p className="text-lg mb-6 max-w-2xl">
              Learn Python, Machine Learning, and AI fundamentals while working
              on real-world datasets. Prepare for a career in one of the most
              in-demand tech fields.
            </p>
            <div>
              <Link to="/sign-up">
                <button className="bg-[#D28C8C] text-black w-56 h-16 rounded-xl">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#3b7d3b] flex flex-row items-center gap-12 py-10 px-8 border rounded-2xl w-[1100px] ml-24 mt-14 text-white">
          <FontAwesomeIcon icon={faCloudArrowUp} size="5x" className="p-4" />

          <div className="flex flex-col justify-center text-left">
            <h3 className="text-3xl text-black font-bold mb-4">
              Cloud Computing & DevOps
            </h3>
            <p className="text-lg mb-6 max-w-2xl">
              Learn AWS, Docker, Kubernetes, and CI/CD pipelines. Equip yourself
              with the skills to manage and scale cloud-based systems for
              startups and enterprises.
            </p>
            <div>
              <Link to="/sign-up">
                <button className="bg-[#D28C8C] text-black w-56 h-16 rounded-xl">
                  View Course
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#3b7d3b] flex flex-row items-center gap-12 py-10 px-8 border rounded-2xl w-[1100px] ml-24 mt-14 text-white">
          <FontAwesomeIcon icon={faShieldAlt} size="5x" className="p-4" />

          <div className="flex flex-col justify-center text-left">
            <h3 className="text-3xl text-black font-bold mb-4">
              Cybersecurity & Ethical Hacking
            </h3>
            <p className="text-lg mb-6 max-w-2xl">
              Learn how to secure networks, detect vulnerabilities, and defend
              against cyber threats. This course equips you with the skills to
              become a certified ethical hacker.
            </p>
            <div>
              <Link to="/sign-up">
                <button className="bg-[#D28C8C] text-black w-56 h-16 rounded-xl">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesPage;
