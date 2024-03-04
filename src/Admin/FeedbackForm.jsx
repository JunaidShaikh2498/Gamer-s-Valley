import React, { useState } from 'react';

const FeedbackForm = () => {
  const [suggestion, setFeedback] = useState('');
  const customerId = JSON.parse(localStorage.getItem("customer").customerId);
  const user=JSON.parse(localStorage.getItem("user"));
  

  const handleSubmit = () => {
    
    fetch(`http://localhost:8080/givefeedback/${customerId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${user.accessToken}`
      },
      body: JSON.stringify({ suggestion}),
    })
      .then(response => {
        if (response.ok) {
          console.log('Feedback submitted successfully');
          // You can perform any additional actions upon successful submission
        } else {
          console.error('Failed to submit feedback');
        }
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
      });
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <textarea
        placeholder="Enter your feedback..."
        value={suggestion}
        onChange={(e)=>setFeedback(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FeedbackForm;