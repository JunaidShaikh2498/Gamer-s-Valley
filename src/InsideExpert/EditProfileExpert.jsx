import React, { useReducer, useState } from 'react'
import './EditProfile.css'
import { useNavigate } from 'react-router-dom';

const EditProfileExpert = () => {
      
  const [formValid, setFormValid] = useState(false);

  const navigate = useNavigate()
 const [isUp,setIsUp]=useState("")
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
      expert.username.valid &&
      expert.password.valid
    ) {
      setFormValid(true);
    }
  };
    const backToExpertDash = ()=>{
      navigate("/expdashboard");
    };
    
    const updateExpert = (e) => {
    e.preventDefault();
    console.log(expert);
    const options = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        firstname: expert.firstname.value,
        lastname: expert.lastname.value,
        email: expert.email.value,
        qualification: expert.qualification.value,
        username:expert.username.value,
        password: expert.password.value
      })
    };
    fetch(`http://localhost:8080/update/:regId`,options)
    .then(res=> res.json())
    .then((data)=>{setIsUp(data)
    if(isUp==="Updated Successfully")
    {
      navigate('/expdashboard')
    }
    else{
      navigate('/expdashboard/editProfile')
    }
    })

    //console.log(formData);
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
        case "password":
          var digit = /[\d]{1,}/;
          var special = /[\W_!@#$%^&]{1,}/;
          var capital = /[A-Z]{1,}/;
          var isCapital;
          var isDigit;
          var isSpecial;
  
          isCapital = capital.test(value);
          isDigit = digit.test(value);
          isSpecial = special.test(value);
  
          if ((value.length < 5) || (isCapital || isDigit || isSpecial)) {
            // $("#strength").html("Weak").css("color","red")
            error = "Weak password";
            valid = false;
          }
          if (isCapital && isDigit) {
            // $("#strength").html("Average").css("color","Orange")
            error = "Average password";
            valid = false;
          }
          if (isCapital && isSpecial) {
            // $("#strength").html("Average").css("color","Orange")
            error = "Average password";
            valid = false;
          }
          if (isDigit && isSpecial) {
            // $("#strength").html("Average").css("color","Orange")
            error = "Average password";
            valid = false;
          }
          if (isCapital && isDigit && isSpecial) {
            // $("#strength").html("Strong").css("color","green")
            error = "";
            valid = true;
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
      firstname: { value: "", valid: false, touched: false, error: "" },
      lastname: { value: "", valid: false, touched: false, error: "" },
      email: { value: "", valid: false, touched: false, error: "" },
      username: { value: "", valid: false, touched: false, error: ""},
      password: { value: "", valid: false, touched: false, error: "" },
      qualification: {value: "", valid: false, touched: false, error: "" },
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
         onChange={handleChange}
       />
      </div>
      <div className="form-group">
      <label htmlFor="lastName">Last Name:</label>
      <input
         type="text"
         id="lastname"
         name="lastname"
         value={expert.lastname.value}
         onChange={handleChange}
       />
      </div>
      <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
         type="email"
         id="email"
         name="email"
         value={expert.email.value}
         onChange={handleChange}
       />
      </div>
      <div className="form-group">
      <label htmlFor="qualification">Qualification:</label>
      <input
         type="text"
         id="qualification"
         name="qualification"
         value={expert.qualification.value}
         onChange={handleChange}
       />
      </div>
      <div className="form-group">
      <label htmlFor="username">Username:</label>
      <input
         type="text"
         id="username"
         name="username"
         value={expert.username.value}
         onChange={handleChange}
       />
      </div>
      <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input
         type="password"
         id="password"
         name="password"
         value={expert.password.value}
         onChange={handleChange}
       />
      </div>
    <button className='btn btn-primary' onClick={(e)=>{updateExpert(e)}}>Save Changes</button>
    <button className='btn btn-secondary' onClick={()=>{backToExpertDash()}}>Cancel</button>
  </form>
</div>
  )
}

export default EditProfileExpert