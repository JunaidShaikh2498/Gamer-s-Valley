import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch("http://localhost:8080/cats")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Categories not found");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setCategories(data);

      });
  }, []);

  const handleAddProducts = (cat) => {
    navigate("/getprods", { state: { cat } });
  };
  return (
    <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-evenly"}}>
      {categories.map((cat) => {
        return (
          <div className="product-card">
            <div className="card">
              <div className="card-img"></div>
              <div className="card-info">
                <p className="text-title">{cat.categoryName} </p>
                <p className="text-body">{cat.categoryDescription}</p>
              </div>
              <div className="card-footer">
                <div className="card-button">
                  <svg
                    className="svg-icon"
                    viewBox="0 0 20 20"
                    onClick={() => {
                      handleAddProducts(cat);
                    }}
                  >
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
      })}
    </div>
  )
};

export default Home;
