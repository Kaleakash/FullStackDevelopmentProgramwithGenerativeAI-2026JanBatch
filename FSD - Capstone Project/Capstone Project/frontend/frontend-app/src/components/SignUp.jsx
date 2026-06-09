import { useState } from "react";

function SignUp() {
let [email, setEmail] = useState('');
let [password, setPassword] = useState('');
let [typeOfUser, setTypeOfUser] = useState('');
let msg = '';

    return(
        <>
        <h3>Sign Up Component</h3>
        <form>
            <input type='email' placeholder="Enter your email" value={email} 
            onChange={(e) => setEmail(e.target.value)} /><br/>
            <input type='password' placeholder="Enter your password" value={password} 
            onChange={(e) => setPassword(e.target.value)} /><br/>
            <select value={typeOfUser} onChange={(e) => setTypeOfUser(e.target.value)}>
                <option value="">Select User Type</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <br/>
            <button type="submit">Sign Up</button>
        </form>
        <a href="/login">Already have an account? Login</a>
        </>
    )
}

export default SignUp;