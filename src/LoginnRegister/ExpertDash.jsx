import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { logout } from '../Slices/loginSlice'
import '../LoginnRegister/Card.css';

const Card = ({ title, text, buttonText, onClick }) => {
  return (
    <div className="cards" onClick={onClick}>
      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>
      <button className="button">{buttonText}</button>
    </div>
  );
};
const ExpertDash = () => {
  const dispatch = useDispatch();
 
  const expertData = JSON.parse(localStorage.getItem("expert"))
  const user = JSON.parse(localStorage.getItem("user"))
  const username = expertData.username
  console.log(username);
  
  const [updateExpertData,setUpdateExpert]=useState({
      username:expertData.registered.username,
      firstname:expertData.firstname,
      lastname:expertData.lastname,
      qualification:expertData.qualification,
      email:expertData.email,
      registrationId:expertData.registered.registrationId
  })
  
 
  //  useEffect(()=>{
  //    fetch(`http://localhost:8080/getexpert/${expertData.registrationId}`,
  //    {
  //       method:"GET",
  //       headers: {Authorization: `Bearer ${user.accessToken}`}
  //    })
  //    .then(response=>{return response.json()})
  //    .then((data)=>{setUpdateExpert({
  //     username:expertData.username,
  //     firstname:data.firstname,
  //     lastname:data.lastname,
  //     qualification:data.qualification,
  //     email:data.email,
  //     registrationId:expertData.registrationId
  //    })})
  //  },[])
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    navigate("/login");
  };
  const editProfile = () => {
    navigate("/editProfileE",{state:{updateExpertData}});
  };
  const answerFAQs = () => {
    navigate("/answerFAQs");
  };
  const viewCats = () => {
    navigate("/home");
  }
    const visitForum = () => {
      navigate("/forums");
    };

    return (
      <div>

        <div className="hello">
          <h1 id="h1">Welcome {localStorage.getItem("username")===null?username:localStorage.getItem("username")}</h1>
          <div className="buttons-container">
            <button className='btn btn-outline-success' id="edit-profile-button" onClick={()=>editProfile()}>
              Edit Profile
            </button>
            <button id="logout-button" className='btn btn-outline-danger' onClick={()=>{handleLogout()}}>
              Logout
            </button>
          </div>
          <div className="container1">
            <Card
              title="Answer FAQs"
              text={`Answers to frequently asked questions by experts.`}
              buttonText="Go To Questions"
              onClick={()=>answerFAQs()}
            />
            <Card
              title="View Categories"
              text={`See all the categories of pc components here.`}
              buttonText="Select Categories"
              onClick={()=>{viewCats()}}
            />
            <Card
              title="View Forums"
              text={`See all the created forums here. Click here to view.`}
              buttonText="Visit Forum"
              onClick={()=>{visitForum()}}
            />
          </div>
        </div>
      </div>
    );
  };

export default ExpertDash;
