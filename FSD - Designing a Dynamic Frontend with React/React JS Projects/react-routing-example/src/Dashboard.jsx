import { Link, Outlet, useNavigate } from "react-router-dom";

function Dashboard() {


let navigate = useNavigate();
let userEmailId = sessionStorage.getItem("user");
let logout = ()=> {
    sessionStorage.removeItem("user");
    navigate("/");
}
    return(
        <div>
            <h2>Welcome to Dashboard user {userEmailId}</h2>

            <nav>
                <Link to="profile">Profile</Link> |
                <Link to="setting">Setting</Link> 
            </nav>
            <br/>
                <Outlet/>
            <br/>
            <input type="button" value="logout" onClick={logout}/>
        </div>
    )
}
export default Dashboard;