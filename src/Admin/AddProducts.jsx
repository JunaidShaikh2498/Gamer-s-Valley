import React, { useState } from 'react'
import './AddFromAdmin.css'
import { useLocation } from 'react-router-dom'

const AddProducts = () => {

    const {state} = useLocation()
    const{cat}=state||{}
    console.log(cat);

    const user = JSON.parse(localStorage.getItem("user"))

    const [product,setProduct]= useState({
        productName : "",
        productDescription : "",
        productPrice : 0
    })
    const [productStatus,setProductStatus]=useState("")
    const addProd = (e)=>{
        e.preventDefault()
        const options = {
            method: "POST",
            headers:{"Authorization":`Bearer ${user.accessToken}`,"content-type":"application/json"},
            body: JSON.stringify({
                productName : product.productName ,
                productDescription : product.productDescription ,
                productPrice : product.productPrice
            })
        }

        fetch(`http://localhost:8080/addProduct/${cat.categoryId}`,options)
        .then((res)=>{
            if(!res.ok){
                throw new Error("Something went wrong")
            }
            else{
                return res.json
            }
        })
        .then((data)=>{
            if(data){
                setProductStatus("Product added to list")
            }
            else{
                setProductStatus("Couldn't insert product")
            }
        })
    }
  return (
    <div className='form-body'>
    <div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="pname">Product Name</label>
          <input type="text" id="pname" name="productName" required 
          onChange={(e)=>{
            setProduct((previousState)=>({...previousState,productName:e.target.value}))
          }}/>
        </div>
        <div class="form-group">
          <label for="pdesc">Product Description</label>
          <textarea name="productDescription" id="pdesc" rows="10" cols="50" required
          onChange={(e)=>{
            setProduct((previousState)=>({...previousState,productDescription:e.target.value}))
          }}>          </textarea>
        </div>
        <div class="form-group">
          <label for="price">Product Price</label>
          <input type="number" id="price" name="productPrice" required
          onChange={(e)=>{
            setProduct((previousState)=>({...previousState,productPrice:e.target.value}))
          }}/>
        </div>
        <button class="form-submit-btn" onClick={(e)=>{addProd(e)}}>Add Product</button>
      </form>
      <h2>{productStatus}</h2>
    </div>
    </div>
  )
}

export default AddProducts