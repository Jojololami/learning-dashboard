import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import InputField from "../components/InputField";

const ForgotPassword = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px]">
          <div className="flex justify-center gap-[10px] items-center mb-5 font-bold text-[14px]">
            <img src={logo} className="w-10" alt="logo" />
            <p>Learn Tech Hub</p>
          </div>

          <h2 className="text-xl font-bold text-center">Forgot Password</h2>
          <p className="text-sm text-center mt-3 text-gray-600 mb-1">
            Enter your email address and we’ll send you a reset link.
          </p>

          <form className="flex flex-col">
            <InputField
              label="Email"
              name="email"
              placeholder="Enter your email"
              inputType="email"
              required={true}
              isPassword={false}
            />

            <button
              type="submit"
              className="bg-[#3b7d3b] hover:bg-[#D28C8C] text-white font-bold py-2 rounded-lg transition"
            >
              Send Reset Link
            </button>
          </form>

          <p className="text-center mt-3 text-slate-500 text-lg font-medium">
            Remembered your password?{" "}
            <span className="text-blue-500 cursor-pointer">
              <Link to="/log-in">Login Here</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
