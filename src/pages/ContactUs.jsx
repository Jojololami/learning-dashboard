import React from "react";
import contactbgrd from "../assets/images/contactUs.jpg";

const ContactUs = () => {
  return (
    <div
      className="mt-4 w-full bg-cover bg-center flex justify-center items-start py-16"
      style={{ backgroundImage: `url(${contactbgrd})` }}
    >
      <div className="border border-slate-200 rounded-2xl pt-12 pb-10 px-6 w-[90%] max-w-[1220px] bg-white/70 backdrop-blur-md text-center shadow-lg">
        <h2 className="text-3xl font-extrabold w-[300px] mx-auto py-4 bg-[#3b7d3b] text-white rounded-3xl">
          Get In Touch
        </h2>

        <p className="font-semibold pb-6 mt-4">
          We are here for you, feel free to reach out
        </p>

        <form className="mb-4 w-full flex flex-col gap-4 items-center">
          <div className="bg-white w-full max-w-[460px]">
            <input
              className="w-full border rounded-xl border-slate-600 h-12 text-xl pl-3"
              name="name"
              placeholder="Name"
              type="text"
            />
          </div>

          <div className="bg-white w-full max-w-[460px]">
            <input
              className="w-full border rounded-xl border-slate-600 h-12 text-xl pl-3"
              name="email"
              placeholder="john.doe@email.com"
              type="email"
            />
          </div>

          <div className="bg-white w-full max-w-[460px]">
            <input
              className="w-full border rounded-xl border-slate-600 h-12 text-xl pl-3"
              name="phone"
              type="text"
              placeholder="08000000000"
            />
          </div>

          <div className="bg-white w-full max-w-[460px]">
            <textarea
              name="message"
              rows={7}
              className="w-full border rounded-xl border-slate-600 text-xl pl-3 py-2"
              placeholder="How can we help you?"
            />
          </div>

          <button
            className="bg-[#D28C8C] hover:bg-[#3b7d3b] text-white font-bold py-2 rounded-xl mt-3 transition w-52 shadow"
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
