import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import InputField from "../components/InputField";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [accountDetails, setAccountDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setAccountDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, password, passwordConfirmation } = accountDetails;

    if (password !== passwordConfirmation) {
      toast.error("Passwords do not match");
      return;
    }

    setSubmitting(true);
    const toastId = toast.loading("Creating your account...");

    try {
      const response = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
        body: JSON.stringify({
          email: "eve.holt@reqres.in",
          password: "pistol",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.update(toastId, {
          render: "Account successfully created 👌",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });

        setAccountDetails({
          fullName: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        });

        navigate("/log-in");
      } else {
        throw new Error(data.error || "Registration failed");
      }
    } catch (error) {
      toast.update(toastId, {
        render: error.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-md">
        <div className="flex justify-center gap-2 items-center mb-5 font-bold text-sm sm:text-base">
          <img src={logo} className="w-10" alt="Logo" />
          <p>Learn Tech Hub</p>
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <InputField
            label="Full Name"
            name="fullName"
            placeholder="Enter full name"
            inputType="text"
            required={true}
            handleChange={handleChange}
            value={accountDetails.fullName}
            isPassword={false}
          />

          <InputField
            label="Email"
            name="email"
            placeholder="Use: eve.holt@reqres.in "
            inputType="email"
            required={true}
            handleChange={handleChange}
            value={accountDetails.email}
            isPassword={false}
          />

          <InputField
            label="Password"
            name="password"
            placeholder="Enter your password"
            inputType="password"
            required={true}
            handleChange={handleChange}
            value={accountDetails.password}
            isPassword={true}
          />

          <InputField
            label="Confirm Password"
            name="passwordConfirmation"
            placeholder="Confirm your password"
            inputType="password"
            required={true}
            handleChange={handleChange}
            value={accountDetails.passwordConfirmation}
            isPassword={true}
          />

          <button
            type="submit"
            disabled={submitting}
            className="bg-[#3b7d3b] hover:bg-[#D28C8C] text-white font-bold py-2 rounded-lg mt-3 transition disabled:bg-gray-400"
          >
            {submitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-3 text-gray-600 text-sm sm:text-base font-medium">
          Already have an account?{" "}
          <Link to="/log-in" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>

        <p className="text-xs sm:text-sm text-center mt-4 text-gray-500">
          By signing up, you agree to our{" "}
          <a className="text-blue-400 font-bold hover:underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a className="text-blue-400 font-bold hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
