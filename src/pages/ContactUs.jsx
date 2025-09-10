import React from "react";
import contactbgrd from "../assets/images/contactUs.jpg";

const ContactUs = () => {
  return (
    <div
      className="mt-4 w-full bg-cover bg-center flex justify-center items-start py-12 sm:py-16 px-4"
      style={{ backgroundImage: `url(${contactbgrd})` }}
    >
      <div className="border border-slate-200 rounded-2xl pt-10 sm:pt-12 pb-8 sm:pb-10 px-4 sm:px-6 md:px-10 w-full max-w-[1220px] bg-white/70 backdrop-blur-md text-center shadow-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mx-auto py-3 sm:py-4 px-4 bg-[#3b7d3b] text-white rounded-3xl w-full max-w-[320px]">
          Get In Touch
        </h2>

        <p className="font-semibold pb-4 sm:pb-6 mt-4 text-sm sm:text-base md:text-lg">
          We are here for you, feel free to reach out
        </p>

        <form className="mb-4 w-full flex flex-col gap-4 items-center">
          <div className="bg-white w-full max-w-[500px]">
            <input
              className="w-full border rounded-xl border-slate-600 h-12 text-base sm:text-lg md:text-xl pl-3"
              name="name"
              placeholder="Name"
              type="text"
            />
          </div>

          <div className="bg-white w-full max-w-[500px]">
            <input
              className="w-full border rounded-xl border-slate-600 h-12 text-base sm:text-lg md:text-xl pl-3"
              name="email"
              placeholder="john.doe@email.com"
              type="email"
            />
          </div>

          <div className="bg-white w-full max-w-[500px]">
            <input
              className="w-full border rounded-xl border-slate-600 h-12 text-base sm:text-lg md:text-xl pl-3"
              name="phone"
              type="text"
              placeholder="08000000000"
            />
          </div>

          <div className="bg-white w-full max-w-[500px]">
            <textarea
              name="message"
              rows={6}
              className="w-full border rounded-xl border-slate-600 text-base sm:text-lg md:text-xl pl-3 py-2"
              placeholder="How can we help you?"
            />
          </div>

          <button
            className="bg-[#D28C8C] hover:bg-[#3b7d3b] text-white font-bold py-2 sm:py-3 rounded-xl mt-3 transition w-full sm:w-52 shadow"
            type="button"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
