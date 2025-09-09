import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import InputField from "../components/InputField";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px]">
        <div className="flex justify-center gap-[10px] items-center mb-5 font-bold text-[14px]">
          <img src={logo} className="w-10" alt="" />
          <p>Learn Tech Hub</p>
        </div>
        <h2 className="text-xl font-bold text-center">LogIn to Your Account</h2>

        <form onSubmit={handleSubmit} className="flex flex-col">
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
            className="bg-[#3b7d3b]  hover:bg-[#D28C8C] text-white font-bold py-2 rounded-lg transition disabled:bg-gray-400"
          >
            {submitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="flex items-center gap-2 m-2">
          <input
            type="checkbox"
            id="rememberMe"
            className="w-4 h-4 cursor-pointer"
          />
          <label
            htmlFor="rememberMe"
            className="text-sm text-gray-600 cursor-pointer"
          >
            Remember me
          </label>
        </div>

        <p className="text-center mt-3 text-slate-500 text-lg font-medium">
          Don't have an account?{" "}
          <span className="text-blue-500 cursor-pointer">
            <Link to="/sign-up">SignUp Here</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
