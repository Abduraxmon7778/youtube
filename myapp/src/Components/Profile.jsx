import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (token) fetchUser();
  }, [token]);

  if (!token) return <Navigate to="/login" replace />;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Профиль
        </h2>

        {user ? (
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold text-gray-700">Имя:</span> {user.username}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-700">Email:</span> {user.email}
            </p>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
              className="w-full bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600 transition"
            >
              Выйти
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500">Загрузка...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
