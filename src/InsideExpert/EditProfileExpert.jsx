import React, { useState } from 'react'
import './EditProfile.css'

const EditProfileExpert = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    qualification: '',
    username: '',
    password: ''
    });
    
    // Function to handle form field changes
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
    ...formData,
    [name]: value
    });
    };
    
    // Function to handle form submission
    const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the form data here, like sending it to an API
    console.log(formData);
    };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label htmlFor="firstName">First Name:</label>
      <input
         type="text"
         id="firstName"
         name="firstName"
         value={formData.firstName}
         onChange={handleInputChange}
       />
      </div>
      <div className="form-group">
      <label htmlFor="lastName">Last Name:</label>
      <input
         type="text"
         id="lastName"
         name="lastName"
         value={formData.lastName}
         onChange={handleInputChange}
       />
      </div>
      <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
         type="email"
         id="email"
         name="email"
         value={formData.email}
         onChange={handleInputChange}
       />
      </div>
      <div className="form-group">
      <label htmlFor="qualification">Qualification:</label>
      <input
         type="text"
         id="qualification"
         name="qualification"
         value={formData.qualification}
         onChange={handleInputChange}
       />
      </div>
      <div className="form-group">
      <label htmlFor="username">Username:</label>
      <input
         type="text"
         id="username"
         name="username"
         value={formData.username}
         onChange={handleInputChange}
       />
      </div>
      <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input
         type="password"
         id="password"
         name="password"
         value={formData.password}
         onChange={handleInputChange}
       />
      </div>
    <button type="submit">Save Changes</button>
  </form>
</div>
  )
}

export default EditProfileExpert