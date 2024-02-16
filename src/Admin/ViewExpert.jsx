import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export const ViewExpert = () => {
    const[experts,setExperts]=useState([]);
    const loginStat = useSelector(((state) => state.logged.loggedIn))
    useEffect(()=>{
        console.log(loginStat);
        fetch("http://localhost:8080/expert_list")
        .then(resp=>resp.json())
        .then(data=>setExperts(data))
    },[]);
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
                <th>Delete</th>

            </tr>
            {experts.map((user)=>{
                return (
                <tr>
                    <td>{user.expertId}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.qualification}</td>
                    <td>{user.registered.registration_id}</td>
                    <td>{user.registered.approved}</td>
                    <td><button>Update</button></td>
                    <td><button>Delete</button></td>
                </tr>
                )})
            }
        </table>
    </div>
  )
}
