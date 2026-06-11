import { useState } from "react";
import {register} from '../service/loginService';
import { useNavigate } from "react-router-dom";

function SignUp() {
let [email, setEmail] = useState('');
let [password, setPassword] = useState('');
let [typeOfUser, setTypeOfUser] = useState('');
let [msg, setMsg] = useState('');
let signUp = async (event) => {
    event.preventDefault();
    let signUpDetails = {email, password, typeOfUser};
    let result = await register(signUpDetails);
    console.log(result);
    setMsg(result.message);
    setEmail('');
    setPassword('');
    setTypeOfUser('');
}
    return(
        <>
        <span style={{ color: 'red' }}>{msg}</span>
        <h3>Sign Up Component</h3>
        <form onSubmit= {signUp}>
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
            <button type="submit">Sign Up</button>
        </form>
        <a href="/login">Already have an account? Login</a>
        </>
    )
}

export default SignUp;