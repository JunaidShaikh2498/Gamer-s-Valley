import React, { useEffect,useState } from 'react';

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
  { id: 10, name: 'Mouses', price: '$60',image:mouse,description:'Nice phone!!' },
  { id: 11, name: 'Headsets', price: '$60',image:heads,description:'Nice phone!!' }
];

const cartHandler = (e) => {
  window.location.href = '/home';
};


const CategoryCard = ({ category}) => (
  
  <div className="product-card">
    {/*<div className="product-image"> <img src={product.image} style={{height:'200px'}}/> </div>
    <div className="product-name">{product.name}</div>
    <div className="product-price">{product.price}</div>
<span className="product-description">{product.description}</span>*/}
    <div className="card">
  <div className="card-img" >
    <img src={cases} alt='no image' className='card-img'/>
    </div>

  <div className="card-info">
    <p className="text-title">{category.categoryName} </p>
    <p className="text-body">{category.categoryDescription}</p>
  </div>
  <div className="card-footer">
    {/*<span className="text-title">{category.price}</span>*/}
    <div className="card-button">
      <svg className="svg-icon" viewBox="0 0 20 20" onClick={cartHandler}>
        <path fill="currentColor" d="M6.554 9.639a.5.5 0 0 0 .707.707l2.667-2.677a.25.25 0 0 0 0-.354L7.261 4.639a.5.5 0 0 0-.707.707L8.2 7H1.5a.5.5 0 0 0 0 1h6.7ZM12 1H5.5a.5.5 0 0 0 0 1h6a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H5.25a.5.5 0 0 0 0 1H12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
</svg>
    </div>
  </div>
</div>
  </div>
);

const CategoryList = () => {
  const[cats,setCats]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8080/home")
        .then(resp=>resp.json())
        .then(data=>setCats(data))
    },[]);
  const categoryCards = cats.map((u) => (
    <CategoryCard key={u.categoryId} product={u} />
  ));

  const rows = categoryCards.reduce((result, row, index) => {
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