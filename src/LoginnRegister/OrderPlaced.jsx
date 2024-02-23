import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./PlaceOrder.css"

const OrderPlaced = () => {
  const navigate = useNavigate()
    const custId= JSON.parse(localStorage.getItem("customer")).customerId
  return (
    <div  className="placed-order" style={{justifyContent:"center"}}>
        <h1>ID No:{custId}</h1> 
        <h2>Order has been placed. Please check your mail for more details</h2>
        <button className='btn btn-outline-primary' onClick={()=>{navigate("/homepage")}}>Back to Shopping</button>
    </div>
  )
}

export default OrderPlaced