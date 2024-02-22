import React from 'react'

export const PlaceOrder = () => {
    const customerId= JSON.parse(localStorage.getItem("customerId"))
    
  return (
    <div>
        <h1>Your order has been placed on your id : {customerId} </h1>
        
    
    
    </div>
  )
}
