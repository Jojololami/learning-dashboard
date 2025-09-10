import React from "react";
import { Link } from "react-router-dom";
import student from "../assets/images/student.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faFileVideo,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold leading-snug mb-6">
            <span className="underline decoration-wavy decoration-yellow-400">
              Grow
            </span>{" "}
            your skill <br />
            to advance{" "}
            <span className="underline decoration-wavy decoration-yellow-400">
              your
            </span>
            <br />
            <span className="underline decoration-wavy decoration-yellow-400">
              career
            </span>{" "}
            path
          </h1>
          <p className="text-base sm:text-lg mb-6 text-gray-700">
            The best and largest online tutoring application in Nigeria.
            <br />
            The most complete online learning solution for techies
          </p>
          <Link to="/sign-up">
            <button className="bg-[#3b7d3b] text-white w-40 sm:w-48 md:w-56 h-12 sm:h-14 md:h-16 rounded-xl">
              Join for free
            </button>
          </Link>
        </div>

        <div className="flex-1 relative flex justify-center md:justify-end">
          <img
            src={student}
            alt="Student"
            className="w-48 sm:w-60 md:w-72 rounded-lg z-10"
          />
          <div className="absolute top-2 md:top-20 right-20 md:right-5 bg-white px-3 py-2 rounded-md text-sm md:text-base shadow-md text-center z-20">
            🎉 Congratulations <br />
            <small>Your learning is completed</small>
          </div>
          <div className="absolute bottom-2 md:bottom-5 left-1/2 -translate-x-1/2 bg-white px-3 py-2 rounded-md text-sm md:text-base shadow-md text-center z-20">
            220k+ Satisfied Students
          </div>
        </div>
      </section>

      <section className="bg-[#D28C8C] py-12 md:py-20 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          How Learn Tech Hub Works
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden w-full md:w-[48%]">
            <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 border-8 border-white rounded-full bg-[#3b7d3b] text-white text-2xl md:text-4xl font-bold">
              1
            </div>
            <div className="flex-1 p-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Pick your learning path
              </h3>
              <p>
                Select the tech field that matches your goals, whether it’s
                coding, design, or data.
              </p>
            </div>
            <FontAwesomeIcon
              icon={faChalkboardUser}
              size="3x"
              className="hidden md:block text-[#3b7d3b] p-6"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden w-full md:w-[48%]">
            <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 border-8 border-white rounded-full bg-[#3b7d3b] text-white text-2xl md:text-4xl font-bold">
              2
            </div>
            <div className="flex-1 p-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Learn with guided resources
              </h3>
              <p>
                Follow structured lessons, videos, and exercises designed to
                build your skills step by step.
              </p>
            </div>
            <FontAwesomeIcon
              icon={faFileVideo}
              size="3x"
              className="hidden md:block text-[#3b7d3b] p-6"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden w-full md:w-[48%]">
            <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 border-8 border-white rounded-full bg-[#3b7d3b] text-white text-2xl md:text-4xl font-bold">
              3
            </div>
            <div className="flex-1 p-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Apply your knowledge with projects
              </h3>
              <p>
                Work on real projects, practice teamwork, and prepare for career
                opportunities in tech.
              </p>
            </div>
            <FontAwesomeIcon
              icon={faBrain}
              size="3x"
              className="hidden md:block text-[#3b7d3b] p-6"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-8 max-w-6xl mx-auto">
          <p className="text-3xl md:text-5xl font-bold text-center md:text-left leading-snug">
            Take the first step to <br /> a skilled and better you!
          </p>
          <Link to="/sign-up">
            <button className="bg-[#3b7d3b] text-white w-40 md:w-56 h-12 md:h-16 rounded-xl">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
