import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
const [admin,setAdmin]=useState("admin@gmail.com")
    return(
        <div style={{"backgroundColor":"gray","color":"white"}}>
            <h3>Parent Component</h3>
            <p>Parent emailId is in parent components is {admin}</p>
        <Child1 parentName={admin} age="21"></Child1>
        <Child2 pName={admin} designation="Manager"></Child2>
            <p>Parent emailId is in parent components is {admin}</p>

        </div>
    )
}

export default Parent;