import React from 'react';
import './ProdList.css';
import pic from './mobile1.webp';

const products = [
  { id: 1, name: 'Product 1', price: '$10',image:pic,description:'Nice phone!!'},
  { id: 2, name: 'Product 2', price: '$20',image:pic,description:'Nice phone!!' },
  { id: 3, name: 'Product 3', price: '$30',image:pic,description:'Nice phone!!' },
  { id: 4, name: 'Product 4', price: '$40',image:pic,description:'Nice phone!!' },
  { id: 5, name: 'Product 5', price: '$50',image:pic,description:'Nice phone!!' },
  { id: 6, name: 'Product 6', price: '$60',image:pic,description:'Nice phone!!' },
  { id: 7, name: 'Product 7', price: '$60',image:pic,description:'Nice phone!!' },
  { id: 8, name: 'Product 8', price: '$60',image:pic,description:'Nice phone!!' }

];

const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="product-image"> <img src={product.image} style={{height:'200px'}}/> </div>
    <div className="product-name">{product.name}</div>
    <div className="product-price">{product.price}</div>
    <span className="product-description">{product.description}</span>
  </div>
);

const ProductList = () => {
  const productCards = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const rows = productCards.reduce((result, row, index) => {
    if (index % 3 === 0) {
      result.push([]);
    }
    result[result.length - 1].push(row);
    return result;
  }, []);

  return (
    <div className="product-list">
      {rows.map((row, index) => (
        <div key={index} className="product-row-group">
          {row}
        </div>
      ))}
    </div>
  );
};

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1>Product Page</h1>
      <ProductList />
    </div>
  );
};

export default ProductPage;