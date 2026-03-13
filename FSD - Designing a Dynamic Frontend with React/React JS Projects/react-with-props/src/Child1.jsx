import { useState } from "react";
import Child2 from "./Child2";

function Child1(props) {
const [user1,setUser1]=useState("user1@gmail.com")


    return(
        <div style={{"backgroundColor":"orange","height":"150px","color":"black"}}>
            <h3>Child1 Component</h3>
            <p>Child1 emailId is in child1 components is {user1}</p>
            <p>Parent emailId is in child1 component is {props.parentName} and age is {props.age}</p>
            {props.passValueToParent(user1)}
        </div>
    )
}

export default Child1;