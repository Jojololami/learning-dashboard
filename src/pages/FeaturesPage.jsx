import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faHexagonNodes } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const FeaturesPage = () => {
  return (
    <>
      <div className="mb-8 px-4 md:px-16">
        <div className="flex justify-center mb-8 pt-8">
          <h3 className="text-3xl sm:text-4xl md:text-5xl text-center bg-white/80 border border-slate-500 rounded-3xl font-extrabold px-6 py-4">
            Our <span className="text-[#D28C8C]">Available</span> Courses
          </h3>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-[#3b7d3b] text-white p-8 rounded-2xl shadow-md">
            <FontAwesomeIcon
              icon={faCode}
              size="5x"
              className="p-4 md:flex-shrink-0"
            />
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                Full-Stack Web Development
              </h3>
              <p className="text-lg mb-6 text-white md:text-white max-w-xl">
                Learn both front-end (React, TailwindCSS) and back-end (Node.js,
                Express, MongoDB) to create dynamic, scalable, and secure
                websites. Perfect for beginners and aspiring software engineers.
              </p>
              <Link to="/sign-up">
                <button className="bg-[#D28C8C] text-black w-full md:w-56 h-14 rounded-xl">
                  Start Learning
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 bg-[#3b7d3b] text-white p-8 rounded-2xl shadow-md">
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              size="5x"
              className="p-4 md:flex-shrink-0"
            />
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                Mobile App Development
              </h3>
              <p className="text-lg mb-6 text-white max-w-xl">
                Gain hands-on experience with Flutter and React Native, and
                learn how to design, build, and publish mobile apps that impact
                millions of users.
              </p>
              <Link to="/sign-up">
                <button className="bg-[#D28C8C] text-black w-full md:w-56 h-14 rounded-xl">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 bg-[#3b7d3b] text-white p-8 rounded-2xl shadow-md">
            <FontAwesomeIcon
              icon={faHexagonNodes}
              size="5x"
              className="p-4 md:flex-shrink-0"
            />
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                Data Science & Artificial Intelligence
              </h3>
              <p className="text-lg mb-6 text-white max-w-xl">
                Learn Python, Machine Learning, and AI fundamentals while
                working on real-world datasets. Prepare for a career in one of
                the most in-demand tech fields.
              </p>
              <Link to="/sign-up">
                <button className="bg-[#D28C8C] text-black w-full md:w-56 h-14 rounded-xl">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 bg-[#3b7d3b] text-white p-8 rounded-2xl shadow-md">
            <FontAwesomeIcon
              icon={faCloudArrowUp}
              size="5x"
              className="p-4 md:flex-shrink-0"
            />
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                Cloud Computing & DevOps
              </h3>
              <p className="text-lg mb-6 text-white max-w-xl">
                Learn AWS, Docker, Kubernetes, and CI/CD pipelines. Equip
                yourself with the skills to manage and scale cloud-based systems
                for startups and enterprises.
              </p>
              <Link to="/sign-up">
                <button className="bg-[#D28C8C] text-black w-full md:w-56 h-14 rounded-xl">
                  View Course
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 bg-[#3b7d3b] text-white p-8 rounded-2xl shadow-md">
            <FontAwesomeIcon
              icon={faShieldAlt}
              size="5x"
              className="p-4 md:flex-shrink-0"
            />
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                Cybersecurity & Ethical Hacking
              </h3>
              <p className="text-lg mb-6 text-white max-w-xl">
                Learn how to secure networks, detect vulnerabilities, and defend
                against cyber threats. This course equips you with the skills to
                become a certified ethical hacker.
              </p>
              <Link to="/sign-up">
                <button className="bg-[#D28C8C] text-black w-full md:w-56 h-14 rounded-xl">
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
