import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const FaqList = () => {
  const categories = JSON.parse(localStorage.getItem("cats"));
  const location = useLocation();
  const { faq } = location.state;
  console.log(faq);
  console.log(categories);
  const user = JSON.parse(localStorage.getItem("user"));
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    const url =
      categories !== null
        ? `http://localhost:8080/faq_list/${categories.categoryId}`
        : `http://localhost:8080/faq_list/${faq.categoryId}`;
    fetch(url, {
      method: "GET",
      headers: { "Authorization": `Bearer ${user.accessToken}` },
    }).then((resp) =>
      resp.json().then((data) => {
        console.log(data);
        setFaqs(data);
      })
    );
  }, []);

  return faqs.map((user) => {
    return (
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {user.question}
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{user.answer}</div>
          </div>
        </div>
      </div>
    );
  });
};
