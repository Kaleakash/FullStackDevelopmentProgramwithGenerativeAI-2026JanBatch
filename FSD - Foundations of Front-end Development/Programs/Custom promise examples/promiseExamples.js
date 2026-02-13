let obj = new Promise((resolved,rejected)=> {
    rejected("Promise rejected with error")
    //resolved("Promise resolved successfully")
    
})

obj.then(data=>console.log("Then called :"+data)).catch(error=>console.log("Catch called: "+error))
console.log("normal statement 1")
console.log("normal statement 2")
console.log("normal statement 3")