import { Link, Route, Routes } from "react-router-dom"
import Login from "./Login"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import Dashboard from "./Dashboard"
import Profile from "./Profile"
import Setting from "./Setting"


function App() {


  return (
    <>
    <h2>React Routing Example</h2>
    <nav>
      <Link to="/login">Login</Link> |
      <Link to="/aboutUs">About Us</Link> |
      <Link to="/contactUs">Contact Us</Link> 
    </nav>

    <hr/>
    <Routes>
      <Route path="" element={<Login/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="aboutUs" element={<AboutUs/>}/>
      <Route path="contactUs" element={<ContactUs/>}/>
      <Route path="home" element={<Dashboard/>}>

        <Route path="profile" element={<Profile/>}/>
        <Route path="setting" element={<Setting/>}/>

      </Route>
    </Routes>
    </>
  )
}

export default App
