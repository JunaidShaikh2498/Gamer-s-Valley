import React, { useReducer, useState } from 'react'
import './EditProfile.css'
import { useLocation, useNavigate } from 'react-router-dom';

const EditProfileExpert = () => {
      
  const [formValid, setFormValid] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"))
  const location = useLocation()
  const {updateExpertData}= location.state
  //console.log(updateExpertData);
  const navigate = useNavigate()
 const [isUp,setIsUp]=useState(false)
  const handleChange = (key, value) => {
    const ipObj = validate(key, value);
    setExpert({
      type: "insert",
      fld: key,
      data: {
        value: value,
        valid: ipObj.valid,
        touched: true,
        error: ipObj.error,
      }
    });
    if (
      expert.firstname.valid &&
      expert.lastname.valid &&
      expert.email.valid &&
      expert.username.valid 
    ) {
      setFormValid(true);
    }
  };
    
    const validate = (key, value) => {
      let valid = true;
      let error = "";
      switch (key) {
        case "firstname":
          var fnamep = /^[A-Z][a-z]*$/;
          valid = fnamep.test(value);
          if (!valid) {
            error = "Start w/ a capital Letter";
          }
          return { error, valid };
        case "lastname":
          var lnmp = /^[A-Z][a-z]*$/;
          valid = lnmp.test(value);
          if (!valid) {
            error = "Start w/ a Capital Letter";
          }
          return { error, valid };
        case "email":
          var mailp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
          valid = mailp.test(value);
          if (!valid) {
            error = "Invalid email id";
          }
          return { error, valid };
          case "username":
            var unamep = /^[a-z0-9_]+$/
  
            valid = unamep.test(value);
            if (!valid) {
              error = "Username not valid";
            }
            return { error, valid };
        default:
          return {};
      }
    };
    const initDetails = {
      firstname: { value: updateExpertData.firstname, valid: true, touched: false, error: "" },
      lastname: { value: updateExpertData.lastname, valid: true, touched: false, error: "" },
      email: { value: updateExpertData.email, valid: true, touched: false, error: "" },
      username: { value: updateExpertData.username, valid: true, touched: false, error: ""},
      qualification: {value: updateExpertData.qualification, valid: true, touched: false, error: "" }
    };

    const reducer = (state, action) => {
      switch (action.type) {
        case "insert":
          return { ...state, [action.fld]: action.data };
        case "reset":
          return initDetails;
        default:
          return {};
      }
    };
    const [expert, setExpert] = useReducer(reducer, initDetails);

    const backToExpertDash = ()=>{
      navigate("/expdashboard");
    };
    
    const updateExpert = (e) => {
    e.preventDefault();
    //console.log(expert);
    const options = {
      method: "PUT",
      headers: { 'Authorization': `Bearer ${user.accessToken}`,"content-type": "application/json" },
      body: JSON.stringify({
        firstname: expert.firstname.value,
        lastname: expert.lastname.value,
        email: expert.email.value,
        qualification: expert.qualification.value,
        username:expert.username.value
      })
    };
    fetch(`http://localhost:8080/update/${user.id}`,options)
    .then(res=> res.json())
    .then((data)=>{
      console.log(data);
    if(data===true)
    {
      localStorage.removeItem("username")
      localStorage.setItem("username",expert.username.value)
      navigate('/expdashboard')
    }
    else{
      navigate('/expdashboard/editProfileE')
    }
    })

    //console.log(formData);
    };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form>
      <div className="form-group">
      <label htmlFor="firstName">First Name:</label>
      <input
         type="text"
         id="firstname"
         name="firstname"
         value={expert.firstname.value}
         onChange={(e)=>handleChange("firstname",e.target.value)}
       />
       <div>{expert.firstname.error}</div>
      </div>
      <div className="form-group">
      <label htmlFor="lastName">Last Name:</label>
      <input
         type="text"
         id="lastname"
         name="lastname"
         value={expert.lastname.value}
         onChange={(e)=>handleChange("lastname",e.target.value)}
       />
       <div>{expert.lastname.error}</div>
      </div>
      <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
         type="email"
         id="email"
         name="email"
         value={expert.email.value}
         onChange={(e)=>handleChange("email",e.target.value)}
       />
       <div>{expert.email.error}</div>
      </div>
      <div className="form-group">
      <label htmlFor="qualification">Qualification:</label>
      <input
         type="text"
         id="qualification"
         name="qualification"
         value={expert.qualification.value}
         onChange={(e)=>handleChange("qualification",e.target.value)}
       />
      <div>{expert.qualification.error}</div>
      </div>
      <div className="form-group">
      <label htmlFor="username">Username:</label>
      <input
         type="text"
         id="username"
         name="username"
         value={expert.username.value}
         onChange={(e)=>handleChange("username",e.target.value)}
       />
       <div>{expert.username.error}</div>
      </div>
    <button className='btn btn-primary' disabled={!formValid} onClick={(e)=>{updateExpert(e)}}>Save Changes</button>
    <button className='btn btn-secondary' onClick={()=>{backToExpertDash()}}>Cancel</button>
  </form>
</div>
  )
}

export default EditProfileExpert