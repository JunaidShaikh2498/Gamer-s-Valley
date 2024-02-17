<<<<<<< HEAD
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../Slices/loginSlice'
import '../Navbar/Card.css';
=======
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../Slices/loginSlice";
//import { Navbar } from '../Navbar/Navbar'
import "../Navbar/Card.css";
>>>>>>> 3f6517ef48435ebc43ab3d9ed86f5cac450e43bf

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
 // const location = useLocation()

  // const {data} = location.state

  // useEffect(()=>{
  //   fetch("http://localhost")
  // },[])
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const editProfile = () => {
    navigate("/editProfileE",);
  };
  const answerFAQs = () => {
    navigate("/expdashboard/answerFAQs");
  };
  const viewCats = () => {
    navigate("/home");
  }
    const visitForum = () => {
      navigate("/expdashboard/visitForum");
    };

    return (
      <div>

        <div className="hello">
          <h1 id="h1">Welcome Expert</h1>
          <div className="buttons-container">
            <button id="edit-profile-button" onClick={()=>editProfile()}>
              Edit Profile
            </button>
            <button id="logout-button" onClick={()=>{handleLogout()}}>
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
