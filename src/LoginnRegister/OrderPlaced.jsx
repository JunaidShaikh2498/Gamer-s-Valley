import React from 'react'

const OrderPlaced = () => {
    const custId= JSON.parse(localStorage.getItem("customer")).customerId
  return (
    <div style={{justifyContent:"center"}}>
        <h1>ID No:{custId}</h1> 
        <h2>Order has been placed. Please check your mail for more details</h2>
    </div>
  )
}

export default OrderPlaced