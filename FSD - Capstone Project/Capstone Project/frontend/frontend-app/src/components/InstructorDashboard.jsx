import { useNavigate } from "react-router-dom";

function InstructorDashboard() {
let instructorEmail = sessionStorage.getItem("instructorEmail");
let navigate = useNavigate();
let logout = ()=> {
    sessionStorage.removeItem("instructorEmail");
    navigate('/login');
}

    return(
        <>
        <h3>Instructor Dashboard Component</h3>
        <p>{instructorEmail && <p>Welcome, {instructorEmail}!</p>}</p>
        <input type="button" value="logout" onClick= {logout}/>
        </>
    )
}

export default InstructorDashboard;