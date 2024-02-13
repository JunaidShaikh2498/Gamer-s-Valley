import React from 'react';
import './Card.css';

const Card = ({ title, text, buttonText, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>
      <button className="button">{buttonText}</button>
    </div>
  );
};

const Register = () => {
  const handleCustClick = (e) => {
    window.location.href = './rc';
  };
  const handleExpClick = (e) => {
    window.location.href = './re';
  };

  return (
    <div className="container">
      <Card
        title="Register as Customer"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        buttonText="Register"
        onClick={handleCustClick}
      />
      <Card
        title="Register as Expert"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        buttonText="Register"
        onClick={handleExpClick}
      />
    </div>
  );
};

export  {Register};
