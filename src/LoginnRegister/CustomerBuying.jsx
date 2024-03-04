import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const CustomerBuying = () => {
    const location =  useLocation()
  const{categories}=location.state||{}
  console.log({categories});
  localStorage.setItem("cats",JSON.stringify(categories))
  const user = JSON.parse(localStorage.getItem("user"))
  const [products,setProducts]= useState([])

  const navigate = useNavigate()
  const regId = user?user.id:0
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  useEffect(()=>{
    fetch(`http://localhost:8080/products/${categories.categoryName}`,{
      method: 'GET',
      headers: {Authorization: `Bearer ${user.accessToken}`}
    })
    .then((response)=>{return response.json()})
    .then((data)=>{setProducts(data)})
  },[])



  const addToCart = async (product) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((item) => item.id === product.productId);


    if (existingItemIndex !== -1) {
      // If the product is in the cart, remove it
      await fetch(`http://localhost:8080/deleteCartItem/${product.productId}`,{
        method: "DELETE",
        headers:{
          "Authorization":user.accessToken,
          "Content-Type":"application/json",
        }
      })
      updatedCart.splice(existingItemIndex, 1);
    } else {
      // If the product is not in the cart, add it
      await fetch("http://localhost:8080/cart_item", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${user.accessToken}`,
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
    const resp= await fetch(`http://localhost:8080/getCustByRegId/${regId}`,{
      headers:{"Authorization":`Bearer ${user.accessToken}`}
    })
      const customerData = await resp.json();
      
      localStorage.setItem("customer",JSON.stringify(customerData));
      if (resp.ok) {
        // Assuming your backend returns the customer ID
       
    // const payload = {
    //   cart: cart,
    //   customer_id: customerId,
    // };

    
}
navigate("/view_cart");}

  return (
    <div className='product-container'>
      <button className="btn btn-secondary"  onClick={()=>{navigate("/homepage")}}>Go Back</button>
      <div style={{display:"flex", justifyContent:"flex-end"}}>

        <button className="btn btn-secondary"  onClick={()=>{handleViewCart()}}>View Cart</button>
        {/* <button className="btn btn-info"  onClick={()=>{navigate("/faqs")}}>FAQs</button> */}
      </div>
        <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={`../../src/product-images/${product.productName}.jpeg`} alt='not found'/>
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
        
    </div>
  )
}

export default CustomerBuying