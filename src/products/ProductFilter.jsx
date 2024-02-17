import React, { useState, useEffect } from 'react';

const ProductFilter = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    // Fetch products from the API
    fetch('http://localhost:8080/allProds')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    // Apply filters when priceFilter or categoryFilter change
    filterProducts();
  }, [priceFilter, categoryFilter, products]);

  const filterProducts = () => {
    let filtered = [...products];

    // Apply price filter
    if (priceFilter) {
      filtered = filtered.filter(product => product.productPrice <= parseFloat(priceFilter));
    }

    // Apply category filter
    if (categoryFilter) {
      filtered = filtered.filter(product => product.category.categoryName.toLowerCase() === categoryFilter.toLowerCase());
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h2>Product Filter</h2>

      <div>
        <label>Filter by Price:</label>
        <input
          type="number"
          value={priceFilter}
          onChange={e => setPriceFilter(e.target.value)}
        />
      </div>

      <div>
        <label>Filter by Category:</label>
        <input
          type="text"
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
        />
      </div>

      <div>
        <h3>Filtered Products:</h3>
        <ul>
          {filteredProducts.map(product => (
            <li key={product.productId}>
              {product.productName} - {product.productPrice} - {product.category.categoryName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFilter;
