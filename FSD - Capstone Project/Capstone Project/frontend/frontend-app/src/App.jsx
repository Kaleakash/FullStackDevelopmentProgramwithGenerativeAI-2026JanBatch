import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import UserDashboard from './components/UserDashboard'
import AdminDashboard from './components/AdminDashboard'
import './App.css'

function App() {
  
  return(
    <>
    <h2>Capstone Project App!</h2>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/user-dashboard' element={<UserDashboard />} />
      <Route path='/admin-dashboard' element={<AdminDashboard />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>
  )

}

export default App
