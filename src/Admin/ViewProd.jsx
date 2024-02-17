import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import "../LoginnRegister/Product.css"
export const ViewProd = () => {
  const navigate = useNavigate()

  const location =  useLocation()
  const{cat}=location.state||{}

  const [products,setProducts]= useState([])
  console.log(cat);

  const handleUpdate = (product)=>{
    navigate("/updatePrice",{state:{product}})
  }
  useEffect(()=>{
    fetch(`http://localhost:8080/products/${cat.categoryName}`)
    .then((response)=>{return response.json()})
    .then((data)=>{setProducts(data)})
  },[])
  return (

    <div className='product-container'>
      <div style={{display:"flex", justifyContent:"flex-end"}}>
        <button className="btn btn-outline-secondary"  onClick={()=>{navigate('/addproduct',{ state: { cat } })}}>Add product</button>
      </div>
        <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <h3>{product.productName}</h3>
            <p>{product.productDescription}</p>
            <p>{product.productPrice}</p>
            <button className='btn btn-secondary' onClick={()=>{handleUpdate(product)}}>Update Price</button>
          </div>
        ))}
        </div>
        
    </div>
  )
}
