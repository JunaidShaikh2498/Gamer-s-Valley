import React, { useState, useEffect } from 'react';
import './ViewExp.css';
const ViewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Fetch feedback data from 'http://localhost:8090/getFeedback' when the component mounts
    fetch('http://localhost:8090/getFeedback')
      .then(response => response.json())
      .then(data => setFeedbacks(data))
      .catch(error => console.error('Error fetching feedbacks:', error));
  }, []); // The empty dependency array ensures the effect runs only once

  return (
    <div >
      <h2>Feedbacks</h2>
      <table border={1} className="my-table" style={{opacity:"80%",backgroundColor:"white"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Feedback</th>
            <th>Customer Id</th>
            {/* Add more columns if needed */}
          </tr>
        </thead>
        <tbody>
          {feedbacks.map(feedback => (
            <tr key={feedback.id}>
              <td>{feedback.fid}</td>
              <td>{feedback.feedback1}</td>
              <td>{feedback.customerId}</td>
              {/* Add more columns if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewFeedback;