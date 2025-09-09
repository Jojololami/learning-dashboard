import React from "react";
import { useNavigate } from "react-router-dom";
import student from "../assets/images/student.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { faFileVideo } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex items-center justify-between p-16">
        <div className="flex-1">
          <h1 className="text-[42px] leading-[1.3] font-bold mb-6">
            <span className=" underline decoration-wavy decoration-4 decoration-yellow-400">
              Grow
            </span>{" "}
            your skill <br />
            to advance{" "}
            <span className="underline decoration-wavy decoration-4 decoration-yellow-400">
              your
            </span>
            <br />
            <span className="underline decoration-wavy decoration-4 decoration-yellow-400">
              career
            </span>{" "}
            path
          </h1>
          <p className="my-5 text-[#555]">
            The best and largest online tutoring application in Nigeria. <br />
            The most complete online learning solution for techies
          </p>

          <Link to="/sign-up">
            <button className="bg-[#3b7d3b]  text-white w-56 h-16 rounded-xl mr-24">
              Join for free
            </button>
          </Link>
        </div>

        <div className="flex-1 relative text-center">
          <div className="absolute w-[200px] h-[300px] border-2 border-green-600 z-[1] top-5 right-[60px] [transform:skewY(-10deg)]"></div>
          <div className="absolute w-[200px] h-[300px] border-2 border-purple-600 z-[1] top-[60px] right-0 [transform:skewY(-10deg)]"></div>

          <img
            src={student}
            alt="Student"
            className="w-[280px] rounded-[12px] relative z-[2]"
          />
          <div className="absolute top-[30px] right-[40px] bg-white px-[15px] py-[10px] rounded-[8px] text-[14px] shadow-md z-[3]">
            🎉 Congratulations <br />
            <small>Your learning is completed</small>
          </div>
          <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 bg-white px-[15px] py-[10px] rounded-[8px] text-[14px] shadow-md z-[3]">
            220k+ Satisfied Student
          </div>
        </div>
      </section>

      <div className="bg-[#D28C8C] ">
        <h2 className="font-bold text-center text-5xl mt-20 p-8 pb-8">
          How Learn Tech Hub Works
        </h2>
        <div className="flex pl-4 ml-auto pb-4 ">
          <div className="bg-primaryGreen rounded-tl-xl rounded-bl-xl text-white text-5xl">
            <p className="border-8 border-white rounded-full w-24 h-24 ml-12 mr-12 mt-10 flex items-center justify-center text-5xl font-bold">
              1
            </p>
          </div>
          <div className="bg-white flex gap-40 pl-4 rounded-tr-xl rounded-br-xl">
            <div className="text-left ">
              <h2 className="text-4xl pt-12">Pick your learning path</h2>
              <p className="pt-4">
                Select the tech field that matches your goals. whether it’s
                coding, design, or data.
              </p>
            </div>

            <FontAwesomeIcon
              icon={faChalkboardUser}
              size="5x"
              className="pr-8 pt-8 pb-8 ml-auto justify-end"
              alt="learning_icon"
            />
          </div>
        </div>

        <div className="flex pl-4 ml-auto pb-4 ">
          <div className="bg-primaryGreen rounded-tl-xl rounded-bl-xl text-white text-5xl">
            <p className="border-8 border-white rounded-full w-24 h-24 ml-12 mr-12 mt-10 flex items-center justify-center text-5xl font-bold">
              2
            </p>
          </div>
          <div className="bg-white flex gap-24 pl-4 rounded-tr-xl rounded-br-xl">
            <div className="text-left ">
              <h2 className="text-4xl pt-12">Learn with guided resources</h2>
              <p className="pt-4">
                Follow structured lessons, videos, and exercises designed to
                build your skills step by step.
              </p>
            </div>
            <FontAwesomeIcon
              icon={faFileVideo}
              size="5x"
              className="pr-8 pt-8 pb-8 ml-auto justify-end"
              alt="resources_icon"
            />
          </div>
        </div>
        <div className="flex pl-4 ml-auto pb-4 ">
          <div className="bg-primaryGreen rounded-tl-xl rounded-bl-xl text-white text-5xl">
            <p className="border-8 border-white rounded-full w-24 h-24 ml-12 mr-12 mt-10 flex items-center justify-center text-5xl font-bold">
              3
            </p>
          </div>
          <div className="bg-white flex gap-31 pl-4 rounded-tr-xl rounded-br-xl">
            <div className="text-left ">
              <h2 className="text-4xl pt-12">
                Apply your knowledge with projects
              </h2>
              <p className="pt-4">
                Work on real projects, practice teamwork, and prepare for career
                opportunities in tech.
              </p>
            </div>
            <FontAwesomeIcon
              icon={faBrain}
              size="5x"
              className="pr-8 pt-8 pb-8 ml-auto justify-end"
              alt="knowledge_icon"
            />
          </div>
        </div>

        <div className="flex justify-between text-left pt-20 pb-20">
          <p className="text-5xl pl-12 font-bold leading-12">
            {" "}
            Take the first step to <br /> a skilled and better you!
          </p>

          <Link to="/sign-up">
            <button className="bg-[#3b7d3b]  text-white w-56 h-16 rounded-xl mr-24">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
