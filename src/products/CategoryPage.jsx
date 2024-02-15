import React, { useEffect, useState } from "react";

import "./Prod.css";
import pro from "../Photos/processorCat.jpg";
import mob from "../Photos/motherboardCat.avif";
import gpu from "../Photos/gpuCat.avif";
import ram from "../Photos/ramCat.jpg";
import ssd from "../Photos/ssdCat.jpg";
import hdd from "../Photos/hddCat.jpg";
import cases from "../Photos/cpucaseCat.jpg";
import coolf from "../Photos/coolingfanCat.jpg";
import keyb from "../Photos/keyboardCat.avif";
import mouse from "../Photos/mouseCat.avif";
import heads from "../Photos/headsetsCat.avif";

const categoryImages = [
  { image: pro },
  { image: mob },
  { image: gpu },
  { image: ram },
  { image: ssd },
  { image: hdd },
  { image: cases },
  { image: coolf },
  { image: keyb },
  { image: mouse },
  { image: heads },
];

const cartHandler = (e) => {
  window.location.href = "/browse_cat";
};

const ProductCard = ({ categories }) => {
  console.log(categories);
  return (
    <div className="product-card">
      <div className="card">
        <div className="card-img">
          {/* {categories.map((cat)=>{
      return(
        
      )
    })} */}
          <img
            src={categoryImages[0].image}
            alt="no image"
            className="card-img"
          />
        </div>
        <div className="card-info">
          <p className="text-title">{categories.categoryName} </p>
          <p className="text-body">{categories.categoryDescription}</p>
        </div>
        <div className="card-footer">
          <div className="card-button">
            <svg className="svg-icon" viewBox="0 0 20 20" onClick={cartHandler}>
              <path
                fill="currentColor"
                d="M6.554 9.639a.5.5 0 0 0 .707.707l2.667-2.677a.25.25 0 0 0 0-.354L7.261 4.639a.5.5 0 0 0-.707.707L8.2 7H1.5a.5.5 0 0 0 0 1h6.7ZM12 1H5.5a.5.5 0 0 0 0 1h6a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H5.25a.5.5 0 0 0 0 1H12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryList = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/home")
      .then((resp) => resp.json())
      .then((data) => {
        setCats(data);
        console.log(data);
      });
  }, []);
  const productCards = cats.map((category) => (
    <ProductCard key={category.Category_Id} categories={category} />
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
