import React, { useState } from "react";
import axios from "axios";
import "../Register/Register.css";
import { Navigate } from "react-router-dom";

const Login = ({ setIsLoginIn, isLoginIn }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (isLoginIn === true || redirect) {
    return <Navigate to={"/"} replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/login", form);
      setIsLoginIn(true);
      localStorage.setItem("isLoginIn", "true");
      alert("✅ Registered successfully!");
      setRedirect(true);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "❌ Registration failed");
    }
  };


  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Вход</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
