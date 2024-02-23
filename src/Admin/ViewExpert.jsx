import { useEffect,useState } from "react";
import React from "react";
import './ViewExp.css';

  export const ViewExpert = () => {
    const [expertList,setExpertList] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = JSON.parse(localStorage.getItem("user"))
  
    useEffect(() => {
      fetch("http://localhost:8080/expert_list"
      ,{
        method: 'GET',
        headers: {Authorization: `Bearer ${user.accessToken}`}
      }
      )
        .then(resp => resp.json())
        .then(d => {
          //console.log(d);
          // localStorage.setItem("experts",JSON.stringify(data))
          setExpertList(d);          
          console.log(JSON.stringify(expertList));
        })
        .catch(error => console.error('Error fetching expert data:', error))
        .finally(() => {
          setLoading(false)
          console.log(loading);
        }
        );
          
    }, []);
  
    const handleClick = async (registrationId, currentApproval) => {
      const newApproval = currentApproval === 0 ? 1 : null;
  
      const url = newApproval ? `http://localhost:8080/approve/${registrationId}` : `http://localhost:8080/revoke/${registrationId}`;
  
      try {
        const response = await fetch(url, {
          method: 'PUT',
          headers:{"Authorization":`Bearer ${user.accessToken}`}
        });
  
        if (!response.ok) {
          throw new Error('Failed to update approval status');
        }
  
        // Update the local state after the database is updated
        setExpertList(prevExperts =>
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
            {/* <p> {JSON.stringify(expertList)}</p> */}
            {/* {
              expertList.map(u => (
                <tr>
                   <td>{u.firstname}</td>
                  <td>{u.lastname}</td>
                  
                </tr>
              ))
            } */}
            {expertList
              .filter(u => u.registered.approved !== null) 
              .map((u) => (
                <tr key={u.expertId}>
                  <td>{u.expertId}</td>
                  <td>{u.firstname}</td>
                  <td>{u.lastname}</td>
                  <td>{u.email}</td>
                  <td>{u.qualification}</td>
                  <td>{u.registered.registrationId}</td>
                  <td>{u.registered.approved}</td>
                  <td>
                     <button onClick={() => handleClick(u.registered.registrationId, u.registered.approved)}>
                      {u.registered.approved ? 'Revoke' : 'Grant'}
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


