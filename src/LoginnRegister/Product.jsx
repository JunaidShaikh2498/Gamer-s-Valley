import React, { useEffect, useState } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userObject = JSON.parse(localStorage.getItem("user"));
  
  const registrationId = userObject ? userObject.registrationId : null;
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
    
  }, []);

  const addToCart = async (product) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((item) => item.id === product.productId);


    if (existingItemIndex !== -1) {
      // If the product is in the cart, remove it
      await fetch(`http://localhost:8080/deleteCartItem/${product.productId}`,{
        method: "DELETE",
        headers:{
          "Content-Type":"application/json",
        }
      })
      updatedCart.splice(existingItemIndex, 1);
    } else {
      // If the product is not in the cart, add it
      await fetch("http://localhost:8080/cart_item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product.productId),
      });
      updatedCart.push(product);
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleViewCart = async () => {
    const resp= await fetch(`http://localhost:8080/getCustByRegId/${registrationId}`);
      const customerData = await resp.json();
      
      localStorage.setItem("customer",JSON.stringify(customerData));
      if (resp.ok) {
        // Assuming your backend returns the customer ID
        const customerId = customerData.customerId;
        localStorage.setItem("customerId",JSON.stringify(customerId));
    const payload = {
      cart: cart,
      customer_id: customerId,
      
    };
    
    navigate("/view_cart");
  };
}


  return (
    <div>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <h3>{product.productName}</h3>
            <p>{product.productDescription}</p>
            <p>{product.productPrice}</p>
            <button
              className={cart.find((item) => item.id === product.productId) ? "added" : ""}
              onClick={() => addToCart({ id: product.productId, ...product })}
            >
              {cart.find((item) => item.id === product.productId) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
      <button className="view-cart-button" onClick={handleViewCart}>
        View Cart
      </button>
    </div>
  );
};

export  default Product;