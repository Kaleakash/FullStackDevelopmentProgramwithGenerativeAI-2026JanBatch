import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
let [emailId,setEmailId]=useState("");
let [password,setPassword]=useState("");
let [typeOfUser,setTypeOfUser]=useState("");
let [msg,setMsg]=useState("");
let LOGIN_URL="http://localhost:3000/logins";
let navigate = useNavigate();
let signIn = async(event)=> {
    setMsg("")
    event.preventDefault();
    if(emailId.length==0 || password.length==0){
        setMsg("All field are required")
        return;
    }

    let login  = {emailId,password,typeOfUser}
    //console.log(login);
    let loginDb = await axios.get(LOGIN_URL);
    console.log(loginDb.data)
    let result = loginDb.data.find(ll=>ll.emailId==login.emailId && ll.password===login.password && ll.typeOfUser===login.typeOfUser)
    if(result==undefined){
            setMsg("Invalid EmailId or password or typeof user wrong")
    }else {
           if(login.typeOfUser==="hr"){
            alert("hr Login successfully")
            navigate("/hrHome")
           } else if(login.typeOfUser==="employee"){
            alert("employee login successfully")
           }
    }
    setEmailId("")
    setPassword("");
}
    return(
        <>
            <h3>Login Page</h3>
            <form onSubmit={signIn}>
                <label>EmailId</label>
                <input type="email" name="emailId" 
                value={emailId} onChange={(event)=>setEmailId(event.target.value)}/><br/>

                <label>Password</label>
                <input type="password" name="password" 
                value={password} onChange={(event)=>setPassword(event.target.value)}/><br/>

                <label>TypeOfUser</label>
                <input type="radio" name="typeOfUser" 
                value="hr" onChange={(event)=>setTypeOfUser(event.target.value)}/>:Hr
                <input type="radio" name="typeOfUser" 
                value="employee" onChange={(event)=>setTypeOfUser(event.target.value)}/>:Employee
                <br/>

                <input type="submit" value="SignIn"/>

            </form>
            <span style={{"color":"red"}}>{msg}</span>
        </>
    )
}


export default Login;