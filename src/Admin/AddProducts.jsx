import React, { useState } from 'react'
import './AddFromAdmin.css'
import { useLocation } from 'react-router-dom'

const AddProducts = () => {

    const {state} = useLocation()
    const{cat}=state||{}
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
            headers:{"content-type":"application/json"},
            body: JSON.stringify({
                productName : product.productName ,
                productDescription : product.productDescription ,
                productPrice : product.productPrice
            })
        }
        fetch(`http://localhost:8080/add-product/${cat.categoryId}`)
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
    <div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="pname">Product Name</label>
          <input type="text" id="pname" name="productName" required 
          onChange={(e)=>{
            setProducts((previousState)=>({...previousState,productName:e.target.value}))
          }}/>
        </div>
        <div class="form-group">
          <label for="pdesc">Product Description</label>
          <textarea name="productDescription" id="pdesc" rows="10" cols="50" required
          onChange={(e)=>{
            setProducts((previousState)=>({...previousState,productDescription:e.target.value}))
          }}>          </textarea>
        </div>
        <div class="form-group">
          <label for="price">Product Price</label>
          <input type="number" id="price" name="productPrice" required
          onChange={(e)=>{
            setProducts((previousState)=>({...previousState,productPrice:e.target.value}))
          }}/>
        </div>
        <button class="form-submit-btn" onClick={(e)=>{addProd(e)}}>Add Product</button>
      </form>
      <h2>{productStatus}</h2>
    </div>
  )
}

export default AddProducts