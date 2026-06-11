import { useNavigate } from "react-router-dom";

function AdminDashboard() {

let navigate = useNavigate();
let logout = ()=> {
    navigate('/login');
}

    return(
        <>
        <h3>Admin Dashboard Component</h3>
        <input type="button" value="logout" onClick= {logout}/>
        </>
    )
}

export default AdminDashboard;