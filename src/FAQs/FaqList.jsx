import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FaqList = () => {
  const { categoryId } = useParams();
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch(`http://localhost:8080/faq_list/${categoryId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }

        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };

    fetchFaqs();
  }, [categoryId]);

  return (
    <div>
      {faqs.map((faq, index) => (
        <div className="accordion" id={`accordionExample-${index}`} key={faq.id}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
                aria-expanded="true"
                aria-controls={`collapse-${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className="accordion-collapse collapse show"
              data-bs-parent={`#accordionExample-${index}`}
            >
              <div className="accordion-body">
                {faq.answer} + {faq.category ? faq.category.categoryId : 'N/A'}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export {FaqList};

