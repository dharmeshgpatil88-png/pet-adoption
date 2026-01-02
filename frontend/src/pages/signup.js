import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/auth/signup", formData);
      alert("Signup Successful!");
      navigate("/login");
    } catch (error) {
      alert("Signup Failed!");
    }
  };

  return (
    <div className="bg-black flex justify-center items-center min-h-screen text-white">
      <form onSubmit={handleSubmit} className="bg-[#0d1625] p-8 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account 🐾</h2>

        <input type="text" name="name" placeholder="Full Name"
          className="w-full p-3 rounded mb-3 text-black"
          onChange={handleChange} required />

        <input type="email" name="email" placeholder="Email Address"
          className="w-full p-3 rounded mb-3 text-black"
          onChange={handleChange} required />

        <input type="password" name="password" placeholder="Password"
          className="w-full p-3 rounded mb-3 text-black"
          onChange={handleChange} required />

        <button type="submit"
          className="bg-green-500 w-full py-3 rounded-lg font-bold hover:bg-green-600 transition">
          Signup
        </button>

      </form>
    </div>
  );
};

export default Signup;
