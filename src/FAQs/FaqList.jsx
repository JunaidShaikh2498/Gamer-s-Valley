import React, { useEffect, useState } from 'react'

export const FaqList = () => {

    const [faqs, setFaqs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/faq_list")
            .then(resp => resp.json()
                .then(data => setFaqs(data)))
    }, []
    );

    return (
        faqs.map((user) => {
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
                                {user.Question}
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                            {user.Answer}
                            </div>
                        </div>
                    </div>
                    
                </div>

            )
        })


    )
}
