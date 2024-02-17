import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const Browse = () => {
  const location =  useLocation()
  const{categories}=location.state||{}

  const [products,setProducts]= useState([])

  console.log(categories);
  useEffect(()=>{
    fetch(`http://localhost:8080/products/${categories.categoryName}`)
    .then((response)=>{return response.json()})
    .then((data)=>{setProducts(data)})
  },[])
  return (
    <div>
        <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <h3>{product.productName}</h3>
            <p>{product.productDescription}</p>
            <p>{product.productPrice}</p>
          </div>
        ))}
        </div>
    </div>
  )
}
