import React from "react";
import aboutbrgd from "../assets/images/about_bgrd.jpeg";
import commbgrd from "../assets/images/community_bgrd.jpeg";

const AboutUs = () => {
  return (
    <>
      <div className="mt-10">
        <div
          className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-start"
          style={{ backgroundImage: `url(${aboutbrgd})` }}
        >
          <div className="flex justify-center mb-4 pt-8">
            <h3 className="pr-2 text-4xl text-center w-[200px] pt-2 pb-2 bg-white/80 border border-slate-500 rounded-3xl font-extrabold">
              About <span className="text-[#D28C8C]">Us</span>
            </h3>
          </div>

          <div className="max-w-4xl mx-auto px-10 mt-2">
            <p className="text-center text-xl text-white font-medium leading-relaxed">
              Learn Tech Hub is a community-driven online learning platform
              built to help you <strong>grow your skills</strong> and advance
              your <strong>career path.</strong> We provide access to guided
              resources, expert tutors, and practical projects designed to
              prepare you for real-world opportunities in tech. At Learn Tech
              Hub, our goal is simple: to make tech education{" "}
              <strong>accessible, flexible, and impactful</strong> for learners
              across Nigeria and beyond.
            </p>

            <div className="flex justify-center mb-4 pt-8">
              <h3 className="pr-2 text-4xl text-center w-[300px] pt-2 pb-2 bg-white/80 border border-slate-500 rounded-3xl font-extrabold">
                Our <span className="text-[#D28C8C]">Mission</span>
              </h3>
            </div>

            <p className="text-center text-xl text-white font-medium leading-relaxed">
              Our mission is to equip learners with the{" "}
              <strong>right skills, tools, and confidence</strong> to thrive in
              today’s digital world. We bridge the gap between traditional
              education and the fast-paced demands of the tech industry by
              offering structured courses, personalized mentorship, and
              collaborative projects. We believe everyone deserves the chance to
              unlock their potential,{" "}
              <strong>regardless of background or experience</strong>, and build
              a successful career in tech.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="h-screen w-full flex flex-col items-center justify-start relative">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${commbgrd})` }}
          ></div>

          <div className="relative top-60 pl-20">
            <h3 className="mb-8 mt-28 text-4xl font-bold border inline-block border-b-2 border-[#D28C8C] ">
              Join The Growing <span className="text-[#3b7d3b]">Community</span>
            </h3>

            <div className="flex mr-32 mb-32">
              <input
                type="text"
                placeholder="Your Email"
                className="mr-8 ml-32 border border-gray-900 w-full pl-4 "
              />
              <button className="bg-[#D28C8C] text-white w-64 h-12 ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
