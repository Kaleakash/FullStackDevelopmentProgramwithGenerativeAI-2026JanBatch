import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import SignUp from "./SignUp"
import HrDashboard from "./HrDashboard"
import EmployeeDashboard from "./EmployeeDashboard"

function App() {


  return (
    <>
      <h2>React Hr Portal App!</h2>  




      <Routes>
        <Route path="" element={<Login/>}/> 
        <Route path="signUp" element={<SignUp/>}/> 
        <Route path="hrHome" element={<HrDashboard/>}/> 
        <Route path="employeeHome" element={<EmployeeDashboard/>}/>  
      </Routes>  
    </>
  )
}

export default App
