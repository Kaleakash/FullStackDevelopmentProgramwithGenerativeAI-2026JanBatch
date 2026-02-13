function addOperation() {
    //alert("event fired")
    // creating new tag 
    let pTag = document.createElement("p");     // p tag ready 
    let nameValue = document.getElementById("name").value
    let ageValue  = document.getElementById("age").value
    //let pTagContent = document.createTextNode("Welcome")  // content ready 
    let pTagContent = document.createTextNode(`Name is ${nameValue} Age is ${ageValue}`)
    pTag.appendChild(pTagContent);          // <p>Welcome</p>
    if(ageValue>=40){
        pTag.setAttribute("class","abc")
    }else {
        pTag.setAttribute("class","xyz")
    }
   // document.getElementById("result").appendChild(pTag);    // <div><p>Welcome</p></div>
   document.getElementsByTagName("body")[0].appendChild(pTag)
   // clear the text field. 
   document.getElementById("name").value=null
   document.getElementById("age").value=""
}