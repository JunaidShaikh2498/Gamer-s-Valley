import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ViewCart = () => {
  const [cart, setCart] = useState([]);
  
  const [street,setStreet] = useState("");
  const [city,setCity]= useState("");
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
    // Assuming you want to send the order details to the server
    const orderDetails = {
      customer_id: JSON.parse(localStorage.getItem("customerId")), // Replace with your logic to get customer ID
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
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        console.log("Order placed successfully!");
        // Optionally, you can clear the cart or perform other actions
        localStorage.removeItem("cart");
        setCart([]);
      } else {
        console.error("Failed to place the order.");
      }
    } catch (error) {
      console.error("Error placing the order:", error);
    }
    navigate('/placeOrder')
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((product, index) => (
        <div key={index} className="product-card">
          <h3>{product.productName}</h3>
          <p>{product.productDescription}</p>
          <p>{product.productPrice}</p>
        </div>
      ))}
      
      <div>
        <h3>Address:</h3>
        Street:<input type="text" value={street} onChange={(e)=>{setStreet(e.target.value)}}/>
        City:<input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
      </div>
      <div>
        <h3>Total Price: {calculateTotalPrice()}</h3>
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
    
};

export default ViewCart;


