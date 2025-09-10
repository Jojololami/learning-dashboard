import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import InputField from "../components/InputField";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginDetails;

    const toastId = toast.loading("Logging in...");
    setSubmitting(true);

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.update(toastId, {
          render: "Login successful 👌",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        navigate("/dashboard");
      } else {
        throw new Error(data.error || "Login failed");
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md">
       
        <div className="flex justify-center gap-2 items-center mb-6 font-bold text-[14px] sm:text-base">
          <img src={logo} className="w-10 sm:w-12" alt="Logo" />
          <p>Learn Tech Hub</p>
        </div>

       
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4">
          Log In to Your Account
        </h2>

       
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputField
            label="Email"
            name="email"
            placeholder="Enter your email"
            inputType="email"
            required={true}
            handleChange={handleChange}
            value={loginDetails.email}
            isPassword={false}
          />

          <InputField
            label="Password"
            name="password"
            placeholder="Enter your password"
            inputType="password"
            required={true}
            handleChange={handleChange}
            value={loginDetails.password}
            isPassword={true}
          />

          <button
            type="submit"
            disabled={submitting}
            className="bg-[#3b7d3b] hover:bg-[#D28C8C] text-white font-bold py-2 rounded-lg transition disabled:bg-gray-400"
          >
            {submitting ? "Logging in..." : "Login"}
          </button>
        </form>

        
        <div className="flex items-center gap-2 mt-4 text-sm sm:text-base">
          <input
            type="checkbox"
            id="rememberMe"
            className="w-4 h-4 cursor-pointer"
          />
          <label htmlFor="rememberMe" className="text-gray-600 cursor-pointer">
            Remember me
          </label>

          <p className="text-gray-600 cursor-pointer ml-auto">
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
        </div>

      
        <p className="text-center mt-5 text-gray-500 text-sm sm:text-base">
          Don&apos;t have an account?{" "}
          <span className="text-blue-500 cursor-pointer font-medium">
            <Link to="/sign-up">Sign Up Here</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
