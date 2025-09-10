import React from "react";
import aboutbrgd from "../assets/images/about_bgrd.jpeg";
import commbgrd from "../assets/images/community_bgrd.jpeg";

const AboutUs = () => {
  return (
    <>
      <div className="mt-10">
        <div
          className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-start px-4"
          style={{ backgroundImage: `url(${aboutbrgd})` }}
        >
          <div className="flex justify-center mb-4 pt-8">
            <h3 className="px-6 text-2xl sm:text-3xl md:text-4xl text-center py-2 bg-white/80 border border-slate-500 rounded-3xl font-extrabold">
              About <span className="text-[#D28C8C]">Us</span>
            </h3>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 mt-2">
            <p className="text-center text-base sm:text-lg md:text-xl text-white font-medium leading-relaxed">
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
              <h3 className="px-6 text-2xl sm:text-3xl md:text-4xl text-center py-2 bg-white/80 border border-slate-500 rounded-3xl font-extrabold">
                Our <span className="text-[#D28C8C]">Mission</span>
              </h3>
            </div>

            <p className="text-center text-base sm:text-lg md:text-xl text-white font-medium leading-relaxed">
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
        <div className="min-h-screen w-full flex flex-col items-center justify-center relative px-4">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${commbgrd})` }}
          ></div>

          <div className="relative w-full max-w-3xl text-center">
            <h3 className="mb-8 text-2xl sm:text-3xl md:text-4xl font-bold border-b-2 border-[#D28C8C] inline-block">
              Join The Growing <span className="text-[#3b7d3b]">Community</span>
            </h3>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6">
              <input
                type="text"
                placeholder="Your Email"
                className="border border-gray-900 w-full sm:flex-1 px-4 py-2 rounded-md"
              />
              <button className="bg-[#D28C8C] text-white px-6 sm:px-10 py-2 rounded-md w-full sm:w-auto">
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
