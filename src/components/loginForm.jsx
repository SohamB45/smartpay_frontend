import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function LoginForm({ isLogin }) {
  const { setUser } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5200/api/auth/login", formData);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      // alert("Login successful!");
      window.location.href = "/Home";
    } catch (err) {
      alert(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="form-container sign-in">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className="social-icons">
          <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
        <span>or use your email and password</span>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <a href="#">Forgot Password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
