import { useEffect, useState } from "react";
import React from "react";
import './ViewExp.css';

  export const ViewExpert = () => {
    const [experts, setExperts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("http://localhost:8080/expert_list")
        .then(resp => resp.json())
        .then(data => setExperts(data))
        .catch(error => console.error('Error fetching expert data:', error))
        .finally(() => setLoading(false));
    }, []);
  
    const handleClick = async (registrationId, currentApproval) => {
      const newApproval = currentApproval === 0 ? 1 : null;
  
      const url = newApproval ? `http://localhost:8080/approve/${registrationId}` : `http://localhost:8080/revoke/${registrationId}`;
  
      try {
        const response = await fetch(url, {
          method: 'PUT',
        });
  
        if (!response.ok) {
          throw new Error('Failed to update approval status');
        }
  
        // Update the local state after the database is updated
        setExperts(prevExperts =>
          prevExperts.map(expert =>
            expert.registered.registrationId === registrationId
              ? {
                  ...expert,
                  registered: {
                    ...expert.registered,
                    approved: newApproval,
                  },
                }
              : expert
          )
        );
      } catch (error) {
        console.error('Error updating approval status:', error);
        // Handle error, show a message to the user, or trigger additional actions
      }
    };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border={1} className="my-table" style={{opacity:"80%",backgroundColor:"white"}}>
          <thead>
            <tr>
              <th>Expert Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Qualifications</th>
              <th>Registration Id</th>
              <th>Approval</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {experts
              .filter(user => user.registered.approved !== null)
              .map((user) => (
                <tr key={user.expertId}>
                  <td>{user.expertId}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.qualification}</td>
                  <td>{user.registered.registrationId}</td>
                  <td>{user.registered.approved}</td>
                  <td>
                    <button onClick={() => handleClick(user.registered.registrationId, user.registered.approved)}>
                      {user.registered.approved ? 'Revoke' : 'Grant'}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};


