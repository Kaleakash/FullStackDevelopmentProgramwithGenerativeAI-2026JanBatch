import { Outlet, useNavigate } from "react-router-dom";

function StudentDashboard() {
let userEmail = sessionStorage.getItem("userEmail");
let navigate = useNavigate();
let logout = ()=> {
    sessionStorage.removeItem("userEmail");
    navigate('/login');
}

    return(
        <>
        <h3>Student Dashboard Component</h3>
        <p>{userEmail && <span>Welcome, {userEmail}!</span>}</p>
        <input type="button" value="logout" onClick= {logout}/>
        <hr />
        <a href="/student-dashboard/view-all-courses">View All Courses</a>|
        <a href="/student-dashboard/search-course-by-title">Search Course By Title</a>
        <br/>
        <div>
            <Outlet />
        </div>
        </>
    )
}

export default StudentDashboard;