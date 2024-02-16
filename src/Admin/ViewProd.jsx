import React, { useEffect } from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
export const ViewProd = () => {
  const navigate = useNavigate()

  const location =  useLocation()
  const{cat}=location.state||{}

  console.log(cat);
  useEffect(()=>{
    fetch(`http://localhost:8080/products/${cat.categoryName}`)
    .then((response)=>{return response.json()})
    .then((data)=>{})
  },[])
  return (

    <div>
        <h1>
           Product List
        </h1>
        <button className="btn btn-outline-primary" onClick={()=>{navigate('/addproduct',{ state: { cat } })}}>Add product</button>
    </div>
  )
}
