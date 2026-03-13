import { useState } from "react";

function Child2(props) {
const [user2,setUser2]=useState("user2@gmail.com")
    return(
        <div style={{"backgroundColor":"yellow","height":"150px","color":"black"}}>
            <h3>Child2 Component</h3>
            <p>Child2 emailId is in child2 components is {user2}</p>
            <p>Parent emailId is in child2 component is {props.pName} and designation is {props.designation}</p>
            <p>Child1 emailId is in child2 component is {props.child1Value}</p>
        </div>
    )
}

export default Child2;