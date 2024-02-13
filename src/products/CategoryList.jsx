import React from 'react';

import './Prod.css';
import pro from '../Photos/processorCat.jpg';
import mob from '../Photos/motherboardCat.avif';
import gpu from '../Photos/gpuCat.avif';
import ram from '../Photos/ramCat.jpg';
import ssd from '../Photos/ssdCat.jpg';
import hdd from '../Photos/hddCat.jpg';
import cases from '../Photos/cpucaseCat.jpg';
import  coolf from '../Photos/coolingfanCat.jpg';
import keyb from '../Photos/keyboardCat.avif';
import mouse from '../Photos/mouseCat.avif';
import heads from '../Photos/headsetsCat.avif';

const products = [
  { id: 1, name: 'Processors', price: '$10',image:pro,description:'Nice phone!!'},
  { id: 2, name: 'Motherboards', price: '$20',image:mob,description:'Nice phone!!' },
  { id: 3, name: 'GPU', price: '$30',image:gpu,description:'Nice phone!!' },
  { id: 4, name: 'RAM', price: '$40',image:ram,description:'Nice phone!!' },
  { id: 5, name: 'SSD', price: '$50',image:ssd,description:'Nice phone!!' },
  { id: 6, name: 'HDD', price: '$60',image:hdd,description:'Nice phone!!' },
  { id: 7, name: 'CPU cases', price: '$60',image:cases,description:'Nice phone!!' },
  { id: 8, name: 'Cooling Fans', price: '$60',image:coolf,description:'Nice phone!!' },
  { id: 9, name: 'Keyboards', price: '$60',image:keyb,description:'Nice phone!!' },
  { id: 7, name: 'Mouses', price: '$60',image:mouse,description:'Nice phone!!' },
  { id: 8, name: 'Headsets', price: '$60',image:heads,description:'Nice phone!!' }

];

const cartHandler = (e) => {
  window.location.href = '/browse_cat';
};

const ProductCard = ({ product }) => (
  <div className="product-card">
    {/*<div className="product-image"> <img src={product.image} style={{height:'200px'}}/> </div>
    <div className="product-name">{product.name}</div>
    <div className="product-price">{product.price}</div>
<span className="product-description">{product.description}</span>*/}
    <div className="card">
  <div className="card-img" >
    <img src={product.image} alt='no image' className='card-img'/>
    </div>

  <div className="card-info">
    <p className="text-title">{product.name} </p>
    <p className="text-body">{product.description}</p>
  </div>
  <div className="card-footer">
    <span className="text-title">{product.price}</span>
    <div className="card-button">
      {/*<svg className="svg-icon" viewBox="0 0 20 20" onClick={cartHandler}>
        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z" />
        <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z" />
        <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z" />
</svg>*/}
<svg className="svg-icon" viewBox="0 0 20 20" onClick={cartHandler}>
	<path fill="currentColor" d="M6.554 9.639a.5.5 0 0 0 .707.707l2.667-2.677a.25.25 0 0 0 0-.354L7.261 4.639a.5.5 0 0 0-.707.707L8.2 7H1.5a.5.5 0 0 0 0 1h6.7ZM12 1H5.5a.5.5 0 0 0 0 1h6a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H5.25a.5.5 0 0 0 0 1H12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
</svg>
    </div>
  </div>
</div>
  </div>
);

const CategoryList = () => {
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

const CategoryPage = () => {
  return (
    <div className="product-page">
      <h1>Categories</h1>
      <CategoryList />
    </div>
  );
};

export default CategoryPage;