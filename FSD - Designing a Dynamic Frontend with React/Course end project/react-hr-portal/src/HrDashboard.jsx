import { useNavigate } from "react-router-dom";

function HrDashboard() {

let navigate = useNavigate();

let logout = ()=> {
    navigate("/")
}

    return(
        <>
            <h3>Hr Home Page

                <input type="button" value="logout" onClick={logout}/>
            </h3>
        </>
    )
}

export default HrDashboard;