import React, { useEffect, useState } from "react";
import "./Product.css";
//import { useLocation } from "react-router-dom";
const Product = () => {
  // const location = useLocation()
  // const{cat} = location.state
  // console.log(cat);
  useEffect(() => {
    fetch(`http://localhost:8080/getallprods`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data)
        console.log(data);
      });
  }, []);
  const [products, setProducts] = useState([]);
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
  );
};

export default Product;
