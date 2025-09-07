import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { toast, ToastContainer } from "react-toastify";
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

    const toastId = toast.loading("Logging in..."); // show loading toast
    setSubmitting(true);

    try {
      // ⏳ simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (email === "test@example.com" && password === "password123") {
        toast.update(toastId, {
          render: "Login successful 👌",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });

        navigate("/"); // redirect to home
      } else {
        throw new Error("Invalid credentials");
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
      setLoginDetails({ email: "", password: "" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

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
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition disabled:bg-gray-400"
          >
            {submitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

      {/* Toast container (must be inside app) */}
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
