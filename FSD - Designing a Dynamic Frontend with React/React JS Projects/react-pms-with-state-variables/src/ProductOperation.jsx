import { useState } from "react";

function ProductOperation() {

const [products,setProducts]=useState([]);
const [product,setProduct]=useState({pid:"",pname:"",price:"",url:""})
const [buttonMsg,setButtonMsg]=useState("Add Product");
const [idFlag,setIdFlag]=useState(false);

let storeOrUpdateProduct = (event)=> {
    event.preventDefault();

    if(product.pid=="" || product.pname=="" || product.price=="" || product.url==""){
        alert("Please enter all field")
        return;
    }

    if(buttonMsg=="Add Product"){

        let isPresent = products.find(p=>p.pid==product.pid);

        if(isPresent==undefined){
            setProducts([...products,product]);
            alert("Product added successfully")
        }else{
            alert("Product id must be unique")
        }

    }else{

        let productIndex = products.findIndex(p=>p.pid == product.pid);
        let tempProducts = products.slice();

        tempProducts[productIndex].pname=product.pname
        tempProducts[productIndex].price=product.price
        tempProducts[productIndex].url=product.url

        setProducts(tempProducts);

        setButtonMsg("Add Product");
        setIdFlag(false);
    }

    setProduct({pid:"",pname:"",price:"",url:""})
}

let deleteProduct = (pid)=> {
    let filterProducts = products.filter(p=>p.pid!=pid);
    setProducts(filterProducts);
    alert("product deleted successfully")
}

let setToUpdateProduct = (updateProduct)=> {
    setProduct(updateProduct);
    setButtonMsg("Update Product");
    setIdFlag(true)
}

return(
<div style={{
    width:"900px",
    margin:"auto",
    padding:"20px",
    backgroundColor:"#f4f6f8",
    fontFamily:"Arial"
}}>

<h2 style={{
    textAlign:"center",
    color:"#2c3e50"
}}>Product CRUD Operation</h2>

<form onSubmit={storeOrUpdateProduct}
style={{
    backgroundColor:"white",
    padding:"20px",
    borderRadius:"8px",
    boxShadow:"0px 2px 8px rgba(0,0,0,0.2)",
    marginBottom:"20px"
}}
>

<input type="text"
name="pid"
value={product.pid}
placeholder="Enter Product Id"
readOnly={idFlag}
onChange={(event)=>setProduct({...product,pid:event.target.value})}
style={{
    width:"100%",
    padding:"10px",
    marginBottom:"10px",
    borderRadius:"5px",
    border:"1px solid #ccc"
}}
/>

<input type="text"
name="pname"
value={product.pname}
placeholder="Enter Product Name"
onChange={(event)=>setProduct({...product,pname:event.target.value})}
style={{
    width:"100%",
    padding:"10px",
    marginBottom:"10px",
    borderRadius:"5px",
    border:"1px solid #ccc"
}}
/>

<input type="text"
name="price"
value={product.price}
placeholder="Enter Product Price"
onChange={(event)=>setProduct({...product,price:event.target.value})}
style={{
    width:"100%",
    padding:"10px",
    marginBottom:"10px",
    borderRadius:"5px",
    border:"1px solid #ccc"
}}
/>

<input type="text"
name="url"
value={product.url}
placeholder="Enter Image URL"
onChange={(event)=>setProduct({...product,url:event.target.value})}
style={{
    width:"100%",
    padding:"10px",
    marginBottom:"10px",
    borderRadius:"5px",
    border:"1px solid #ccc"
}}
/>

<input
type="submit"
value={buttonMsg}
style={{
    width:"100%",
    padding:"10px",
    backgroundColor:"#3498db",
    color:"white",
    border:"none",
    borderRadius:"5px",
    fontWeight:"bold",
    cursor:"pointer"
}}
/>

</form>

<table
style={{
    width:"100%",
    borderCollapse:"collapse",
    backgroundColor:"white",
    boxShadow:"0px 2px 8px rgba(0,0,0,0.2)"
}}
>

<caption style={{
    padding:"10px",
    fontSize:"20px",
    fontWeight:"bold"
}}>Product Details</caption>

<thead style={{
    backgroundColor:"#34495e",
    color:"white"
}}>

<tr>
<th style={{padding:"10px"}}>PId</th>
<th style={{padding:"10px"}}>PName</th>
<th style={{padding:"10px"}}>Price</th>
<th style={{padding:"10px"}}>Image</th>
<th style={{padding:"10px"}}>Delete</th>
<th style={{padding:"10px"}}>Update</th>
</tr>

</thead>

<tbody>

{
products.map((product,index)=>

<tr key={index}
style={{textAlign:"center",borderBottom:"1px solid #ddd"}}
>

<td style={{padding:"10px"}}>{product.pid}</td>
<td style={{padding:"10px"}}>{product.pname}</td>
<td style={{padding:"10px"}}>{product.price}</td>

<td>
<img
src={product.url}
width="60"
height="60"
style={{borderRadius:"6px"}}
/>
</td>

<td>

<button
onClick={()=>deleteProduct(product.pid)}
style={{
backgroundColor:"#e74c3c",
color:"white",
border:"none",
padding:"6px 12px",
borderRadius:"5px",
cursor:"pointer"
}}
>
Delete
</button>

</td>

<td>

<button
onClick={()=>setToUpdateProduct(product)}
style={{
backgroundColor:"#f39c12",
color:"white",
border:"none",
padding:"6px 12px",
borderRadius:"5px",
cursor:"pointer"
}}
>
Update
</button>

</td>

</tr>
)
}

</tbody>

</table>

</div>
)
}

export default ProductOperation;