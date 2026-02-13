let URL ="https://dummyjson.com/products";

//fetch(URL).then(response=>console.log(response)).catch(error=>console.log(error)) which contains url, header and raw body 
//fetch(URL).then(response=>response.json()).then(result=>console.log(result)).catch(error=>console.log(error))

// we are handling promise with fetch using ES5 style 
fetch(URL).then(response=>response.json()).then(result=>{
    // result is promise object which hold data return from backend technologies. 
    //console.log(result)
    let productsData = result.products;
    //console.log(productsData)         // whole product 
    productsData.forEach(product=>{
        // 1st example to display name and title 
        //console.log(product)            // display each product one by one
        //console.log(product.title+" "+product.price)    // display only title and price. 
        // let pTag = document.createElement("p")          // tag is ready 
        // let pTagValue = document.createTextNode(`Name : ${product.title} Price : ${product.price}`) // content ready 
        // pTag.appendChild(pTagValue)
        // document.getElementById("result").appendChild(pTag)

        // 2nd examples images 
        
        console.log(product.title+" "+product.thumbnail)
        let imageTag = document.createElement("img");       // img tag ready 
        imageTag.setAttribute("src",product.thumbnail)  //  <img src="value"/>
        document.getElementById("result").appendChild(imageTag)
    })
}).catch(error=>console.log(error))

// async and await we can handle using ES6 style 