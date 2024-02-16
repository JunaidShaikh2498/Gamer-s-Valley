import React, { useEffect, useState } from 'react'

export const ViewExpert = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/expert_list")
            .then(resp => resp.json())
            .then(data => setExperts(data))
    }, []);

    const [id, setId] = useState();

  const handleClick = () => {
    // Toggle the id between 0 and 1
    setId(experts.registered.approved === 0 ? 1 : 0);
    setId(experts.registered.approved===1?null:1)
  };
    return (
        <div>
            <table border={1}>
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
                {experts.map((user) => {
                    return (
                        <tr>
                            <td>{user.expert_id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.qualification}</td>
                            <td>{user.registered.registration_id}</td>
                            <td>{user.registered.approved}</td>
                            <td><button onClick={handleClick}>
                                {user.registered.approved === 0 ? 'Grant' : 'Revoke'}
                            </button>
                                <p>ID: {user.registered.approved === null ? 'null' : id}</p></td>
                        </tr>
                    )
                })
                }
            </table>
        </div>
    )
}
