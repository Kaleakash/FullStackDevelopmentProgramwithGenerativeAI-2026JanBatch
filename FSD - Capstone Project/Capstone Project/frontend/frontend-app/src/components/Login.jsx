import { useState } from "react";
import {checkLoginDetails} from '../service/loginService';
import { useNavigate } from "react-router-dom";
function Login() {
let [email, setEmail] = useState('');
let [password, setPassword] = useState('');
let [typeOfUser, setTypeOfUser] = useState('');
let [msg, setMsg] = useState('');
let navigate = useNavigate();

let signIn = async (event) => {
    event.preventDefault();
    let login = {email, password, typeOfUser};
    //console.log(login);
    let result = await checkLoginDetails(login);
    console.log(result);
    if(result.message==="Logged in as admin"){
        navigate('/admin-dashboard');
    }else if(result.message==="Logged in as student"){
        sessionStorage.setItem("userEmail", email);
        navigate('/student-dashboard');
    }else if(result.message==="Logged in as instructor"){
        sessionStorage.setItem("instructorEmail", email);
        navigate('/instructor-dashboard');  
    }else {
        setMsg("Invalid credentials. Please try again.");
    }
    setEmail('');
    setPassword('');
    setTypeOfUser('');
}
    return(
        <>
        <span style={{ color: 'red' }}>{msg}</span>
        <h3>Login Component</h3>
        <form onSubmit={signIn}>
            <input type='email' placeholder="Enter your email" value={email} 
            onChange={(e) => setEmail(e.target.value)} /><br/>
            <input type='password' placeholder="Enter your password" value={password} 
            onChange={(e) => setPassword(e.target.value)} /><br/>
            <select value={typeOfUser} onChange={(e) => setTypeOfUser(e.target.value)}>
                <option value="">Select User Type</option>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
                <option value="instructor">Instructor</option>
            </select>
            <br/>
            <button type="submit">Login</button>
        </form>
        <a href="/signup">Don't have an account? Sign Up</a>
        </>
    )
}

export default Login;