import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ViewCart = () => {
  const [cart, setCart] = useState([]);
  
  const [street,setStreet] = useState("");
  const [city,setCity]= useState("");
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate();
  useEffect(() => {
    
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Calculate the total price of all products in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.productPrice, 0);
  };
  

  const handlePlaceOrder = async () => {
    const orderDetails = {
      customer_id: JSON.parse(localStorage.getItem("customer")).customerId, 
      address:{
        street:street,
        city:city,
      },
      totalPrice: calculateTotalPrice()
    };

    localStorage.setItem("totalPrice",JSON.stringify(orderDetails.totalPrice));
    // Send the order details to the server
    try {
      const response = await fetch("http://localhost:8080/placeOrder", {
        method: "POST",
        headers: {
          "Authorization":`Bearer ${user.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        console.log("Order placed successfully!");
        navigate('/placeOrder')
        // Optionally, you can clear the cart or perform other actions
        localStorage.removeItem("cart");
        setCart([]);
      } else {
        console.error("Failed to place the order.");
      }
    } catch (error) {
      console.error("Error placing the order:", error);
    }
    
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
      {cart.map((product, index) => (
        <div key={index} className="product-card">
          <h3>{product.productName}</h3>
          <p>{product.productDescription}</p>
          <p>{product.productPrice}</p>
        </div>
        
      ))}
      </div>
      <div>
        <h3>Address:</h3>
        Street:<input type="text" value={street} onChange={(e)=>{setStreet(e.target.value)}}/>
        City:<input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
      </div>
      <div>
        <h3>Total Price: {calculateTotalPrice()}</h3>
        <button onClick={()=>handlePlaceOrder()}>Place Order</button>
      </div>
    </div>
  );
    
};

export default ViewCart;