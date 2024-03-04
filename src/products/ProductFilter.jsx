import React, { useState, useEffect } from "react";
import "./Prod.css"
const ProductFilter = () => {
  const [products, setProducts] = useState([]);
  const[categories,setCategories]=useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    // Fetch products from the API
    fetch("http://localhost:8080/getallprods")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .then(()=>{
        fetch("http://localhost:8080/cats")
        .then((resp)=>{
          if(!resp.ok){
            throw new Error("No categories found")
          }
          else{
            return resp.json()
          }
        })
        .then((cats)=>{
          console.log(cats);
          setCategories(cats)
          console.log(categories);
        })
        .catch(()=>{
          console.log("Error");
        })
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);


   

    
 

  useEffect(() => {
    // Apply filters when priceFilter or categoryFilter change
    filterProducts();
  }, [priceFilter, categoryFilter, products]);

  const filterProducts = () => {
    let filtered = [...products];

    // Apply price filter
    if (priceFilter) {
      filtered = filtered.filter(
        (product) => product.productPrice <= parseFloat(priceFilter)
      );
    }

    // Apply category filter
    if (categoryFilter) {
      filtered = filtered.filter(
        (product) =>
          product.category.categoryName.toLowerCase() ===
          categoryFilter.toLowerCase()
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="productlist">
      <h2>Product Filter</h2>

      <div>
        <label>Filter by Price:</label>
        <input
        className="filter-inputs"
          type="number"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        />
      </div>

      <div>
        <label>Filter by Category:</label>
        <select onChange={(e) => setCategoryFilter(e.target.value)}>
              <option selected>Choose Category</option>
              {categories.map((prod)=>{return(
                <option value={prod.categoryName}>{prod.categoryName}</option>
              )})}            
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.map((product,index) => (
          <div>
            <div key={index} className="product-card">
              <h3>{product.productName}</h3>
              <p>{product.productDescription}</p>
              <p>{product.productPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
