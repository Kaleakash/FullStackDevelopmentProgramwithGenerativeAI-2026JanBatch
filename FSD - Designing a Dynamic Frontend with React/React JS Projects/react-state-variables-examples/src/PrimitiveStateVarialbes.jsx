import { useState } from "react";
function PrimitiveStateVariables() {
let [id,setId]=useState(100);   // number of state variable 
let [name,setName]=useState("John");  // string state variable
let [salary,setSalary]=useState(50000.50);  // number state variable
let [active,setActive]=useState(true);  // boolean state variable
let updateValue=()=>{
    setId(101);
    setName("Smith");
    setSalary(60000.75);
    setActive(false);
}
let passValue = (id,name)=> {
    alert("Id: "+id+" Name: "+name);
}
    return(
        <div>
            <h3>Primitive State variables</h3>
            <p>Id: {id} </p>
            <p>Name: {name} </p>
            <p>Salary: {salary} </p>
            <p>Active: {active ? "Yes" : "No"} </p>
            <input type="button" value="JS Event with Error" onClick="updateValue()"/>
            <input type="button" value="React Event" onClick={updateValue}/>
            <input type="button" value="Change Name" onClick={()=>setName("John Doe")} />
            <input type="button" value="Pass Id and Name" onClick={()=>passValue(id,name)} />
        </div>
    )
}

export default PrimitiveStateVariables;