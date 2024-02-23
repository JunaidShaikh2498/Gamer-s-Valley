import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "../LoginnRegister/Product.css"
const CategorizedProd = () => {
    const location =  useLocation()
  const{cat}=location.state||{}
  console.log(cat);
const [products,setProducts]= useState([])
useEffect(()=>{
    fetch(`http://localhost:8080/products/${cat.categoryName}`)
    .then((response)=>{return response.json()})
    .then((data)=>{setProducts(data)})
})

  return (
    <div className='product-container'>
      <div style={{display:"flex", justifyContent:"flex-end"}}>
      </div>
        <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={`D:/Final Project/gamer_valley/products/${product.productName}.jpeg`} alt='not found'/>
            <h3>{product.productName}</h3>
            <p>{product.productDescription}</p>
            <p>{product.productPrice}</p>
          </div>
        ))}
        </div>
        
    </div>
  )
}

export default CategorizedProd