import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Profile from './Components/Profile.jsx'

const App = () => {
  // login holatini boshqarish
  const [isLoginIn, setIsLoginIn] = useState(
    localStorage.getItem('isLoginIn') === 'true'
  )
  const [sidebar, setSidebar] = useState(true)

  useEffect(() => {
    localStorage.setItem('isLoginIn', isLoginIn)
  }, [isLoginIn])

  return (
    <>
      {isLoginIn && <Navbar setSidebar={setSidebar} />}
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route
          path="/register"
          element={<Register setIsLoginIn={setIsLoginIn} isLoginIn={isLoginIn} />}
        />
        <Route
          path="/login"
          element={<Login setIsLoginIn={setIsLoginIn} isLoginIn={isLoginIn} />}
        />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
