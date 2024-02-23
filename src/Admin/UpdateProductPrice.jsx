import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const UpdateProductPrice = () => {
  
  const location = useLocation()
  const user = JSON.parse(localStorage.getItem("user"))
  const {product} = location.state
    console.log(product);
  const [stateProduct,setStateProduct]=useState(
    {
        productId:product.productId,
        productName:product.productName,
        productDescription:product.productDescription,
        productPrice:product.productPrice,
        category:product.category
    }
  )
  const[updated,setUpdated]=useState()

  const [price,setPrice]=useState(stateProduct.productPrice)
  const updatePrice= (e)=>{
    e.preventDefault()
    const options={
        method:"PUT",
        headers:{"Authorization":`Bearer ${user.accessToken}`,"content-type":"application/json"},
        body:JSON.stringify({
            productPrice:price
        })
    }
    fetch(`http://localhost:8080/${stateProduct.productId}/updatePrice`,options)
    .then((response)=>{return response.json()})
    .then((data)=>{
        if(data===true){
            setUpdated("Price updated")
        }
        else{
            setUpdated("Product price was not updated")
        }
    })
  }
  return (
    <div style={{display:"flexbox", justifyContent:"flex-start"}}>
        <form className='fomr-control'>
            <label htmlFor='price'>Enter new price</label>
            <input type="number" name="productPrice" id="price" onChange={(e)=>{setPrice(e.target.value)}} value={price}/>

            <button className='btn btn-outline-dark' onClick={(e)=>{updatePrice(e)}}>Update</button>
        </form>

        <div><h2>{updated}</h2></div>
    </div>
  )
}

export default UpdateProductPrice