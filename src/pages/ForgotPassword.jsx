import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import InputField from "../components/InputField";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setSubmitting(true);
    const toastId = toast.loading("Sending reset link...");

    try {
      // Simulate sending reset email using JSONPlaceholder
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "Password Reset Request",
            body: `Password reset link has been sent to ${email}`,
            userId: 1,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send reset link");
      }

      const data = await response.json();

      toast.update(toastId, {
        render: `Reset link sent to ${email}! Check your inbox.`,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setEmail("");
    } catch (error) {
      console.error("Forgot password error:", error);
      toast.update(toastId, {
        render: error.message || "Failed to send reset link. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setSubmitting(false);
    }
  };

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

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <InputField
              label="Email"
              name="email"
              placeholder="Enter your email"
              inputType="email"
              required={true}
              handleChange={handleChange}
              value={email}
              isPassword={false}
            />

            <button
              type="submit"
              disabled={submitting}
              className="bg-[#3b7d3b] hover:bg-[#D28C8C] text-white font-bold py-2 rounded-lg transition disabled:bg-gray-400"
            >
              {submitting ? "Sending..." : "Send Reset Link"}
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