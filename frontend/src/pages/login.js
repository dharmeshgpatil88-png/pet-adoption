import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/auth/login", userData);
      localStorage.setItem("token", res.data.token);
      alert("Login Successful!");
      navigate("/dashboard");
    } catch (error) {
      alert("Wrong Credentials!");
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center text-white">
      <form onSubmit={handleLogin} className="bg-[#101b2d] p-8 rounded-2xl w-full max-w-md shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back 🐶❤️</h2>

        <input type="email" name="email" placeholder="Email"
          className="w-full p-3 mb-3 rounded text-black"
          onChange={handleChange} required />

        <input type="password" name="password" placeholder="Password"
          className="w-full p-3 mb-4 rounded text-black"
          onChange={handleChange} required />

        <button
          type="submit"
          className="bg-green-500 w-full py-3 rounded-lg font-bold hover:bg-green-600 transition">
          Login
        </button>

      </form>
    </div>
  );
};

export default Login;
