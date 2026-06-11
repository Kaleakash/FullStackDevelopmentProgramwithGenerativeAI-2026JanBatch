import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import StudentDashboard from './components/StudentDashboard'
import AdminDashboard from './components/AdminDashboard'
import './App.css'
import InstructorDashboard from './components/InstructorDashboard'
import ViewAllCourseByStudent from './components/student-components/ViewAllCourseByStudent'
import SearchCourseByTitle from './components/student-components/SearchCourseByTitle'

function App() {
  
  return(
    <>
    <h2>Capstone Project App!</h2>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      
      <Route path='/student-dashboard' element={<StudentDashboard />} >
        <Route path='view-all-courses' element={<ViewAllCourseByStudent />} />
        <Route path='search-course-by-title' element={<SearchCourseByTitle />} />
      </Route>

      <Route path='/instructor-dashboard' element={<InstructorDashboard />} />
      <Route path='/admin-dashboard' element={<AdminDashboard />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>
  )

}

export default App
