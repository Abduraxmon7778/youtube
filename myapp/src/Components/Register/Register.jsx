import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { Navigate, Link } from "react-router-dom";

const Register = ({ setIsLoginIn, isLoginIn }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [redirect, setRedirect] = useState(false);

  // if already logged in → redirect to home
  if (isLoginIn === true || redirect) {
    return <Navigate to={"/"} replace />;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);

      // update state + localStorage
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
        <h2>Регистрация</h2>
        <input
          type="text"
          name="name"
          placeholder="Имя пользователя"
          value={form.name}
          onChange={handleChange}
          required
        />
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
        <button type="submit">Зарегистрироваться</button>

        <p>
          Уже есть аккаунт? <Link to={"/login"}>Войти</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
