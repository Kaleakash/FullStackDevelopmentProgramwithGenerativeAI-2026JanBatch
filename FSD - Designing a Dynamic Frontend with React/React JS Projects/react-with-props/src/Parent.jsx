import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
const [admin,setAdmin]=useState("admin@gmail.com")
const [user1Value,setUser1Value]=useState();

// let receiveValueFromChild1 = (data)=> {
//     console.log(data)
//     setUser1Value(data);
// }
//let receiveValueFromChild1=(data)=>user1Value(data);
    return(
        <div style={{"backgroundColor":"gray","color":"white"}}>
            <h3>Parent Component</h3>
            <p>Parent emailId is in parent components is {admin}</p>
        <Child1 parentName={admin} age="21" passValueToParent={(data)=>user1Value(data)}></Child1>
        <Child2 pName={admin} designation="Manager" child1Value={user1Value}></Child2>
            <p>Parent emailId is in parent components is {admin}</p>
            <p>In parent component child1 value is {user1Value}</p>
        </div>
    )
}

export default Parent;