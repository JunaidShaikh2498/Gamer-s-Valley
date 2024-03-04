import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterCustomer = () => {

  const [formValid, setFormValid] = useState(false);

  const navigate = useNavigate()

  const handleChange = (key, value) => {
    const ipObj = validate(key, value);
    setuser({
      type: "insert",
      fld: key,
      data: {
        value: value,
        valid: ipObj.valid,
        touched: true,
        error: ipObj.error,
      },
    });
    if (
      user.firstname.valid &&
      user.lastname.valid &&
      user.email.valid &&
      user.password.valid
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
          error = "Starts with Capital letter";
        }
        return { error, valid };
      case "lastname":
        var lnmp = /^[A-Z][a-z]*$/;
        valid = lnmp.test(value);
        if (!valid) {
          error = "Starts with Capital Letter";
        }
        return { error, valid };
      case "email":
        var mailp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        valid = mailp.test(value);
        if (!valid) {
          error = "Invalid email";
        }
        return { error, valid };
      
      case "contact":
        var contp = /^\d{10}$/
        valid = contp.test(value);
        if (!valid) {
          error = "Contact number should be 10 digit";
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
  const [isReg,setIsReg]=useState(false)
  const initDetails = {
    firstname: { value: "", valid: false, touched: false, error: "" },
    lastname: { value: "", valid: false, touched: false, error: "" },
    email: { value: "", valid: false, touched: false, error: "" },
    contact:{ value: "", valid: false, touched: false, error: "" },
    address:{ value: "", valid: false, touched: false, error: "" },
    username:{value: "", valid: false, touched: false, error: ""},
    password: { value: "", valid: false, touched: false, error: "" },
    approved:{value:1,valid:true,touched:true,error:""},
    roleId:{value:2,valid:true,touched:true,error:""}
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
  const [user, setuser] = useReducer(reducer, initDetails);

  const registeruser = (e)=>{
    e.preventDefault();
    console.log(user);
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        firstname: user.firstname.value,
        lastname: user.lastname.value,
        email: user.email.value,
        contact:user.contact.value,
        address:user.address.value,
        username: user.username.value,
        password: user.password.value,
        approved:user.approved.value,
        roleId: user.roleId.value
      })
    };
    fetch("http://localhost:8080/registered/save",options)
    .then((response)=>{return response.json()})
    .then((data)=>{setIsReg(data)
      if(data){
        navigate('/login')
      }
      else{
        navigate("/rc")
      }
    })

    
  }

  return (
    <div className="container">
        <form >
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <div class="mb-3">
          <label for="exampleInputFname" class="form-label">
            <b>First Name</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="fname"
            aria-describedby="emailHelp"
            defaultValue={user.firstname.value}
            onChange={(e) => {
              handleChange("firstname", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("firstname", e.target.value);
            }}
          />
          <span>{user.firstname.error}</span>
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="lname"
            defaultValue={user.lastname.value}
            onChange={(e) => {
              handleChange("lastname", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("lastname", e.target.value);
            }}
          />
          <span>{user.lastname.error}</span>
        </div>
        </div>

        <div style={{display:"flex",justifyContent:"space-around"}}>
        <div class="mb-3">
          <label for="email" class="form-label">
            <b>Email ID</b>
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="(eg- chahat@gmail.com)"
            defaultValue={user.email.value}
            onChange={(e) => {
              handleChange("email", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("email", e.target.value);
            }}
          />
          <span>{user.email.error}</span>
        </div>
        <div class="mb-3">
          <label for="contact" class="form-label">
            <b>Contact</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="contact"
            placeholder="(eg- 8770695163)"
            defaultValue={user.contact.value}
            onChange={(e) => {
              handleChange("contact", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("contact", e.target.value);
            }}
          />
          <span>{user.contact.error}</span>
        </div>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">
            <b>Address</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="(eg- Shivaji Nagar,Pune)"
            defaultValue={user.address.value}
            onChange={(e) => {
              handleChange("address", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("address", e.target.value);
            }}
          />
          <span>{user.address.error}</span>
        </div>
        
        
        <div class="mb-3">
          <label for="exampleInputFname" class="form-label">
            <b>UserName</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="uname"
            aria-describedby="emailHelp"
            defaultValue={user.username.value}
            onChange={(e) => {
              handleChange("username", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("username", e.target.value);
            }}
          />
          <span>{user.username.error}</span>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
           <b>Password</b>
          </label>
          <input
            type="password"
            class="form-control"
            name="password"
            defaultValue={user.password.value}
            onChange={(e) => {
              handleChange("password", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("password", e.target.value);
            }}
          />
          <span>{user.password.error}</span>
        </div>

        <button
          type="submit"
          disabled={!formValid}
          onClick={(e) => {
            registeruser(e);
          }}
          class="btn btn-success"
        >
          Register
        </button>
      </form>
      <button className="btn btn-outline-primary" onClick={()=>{navigate("/")}}>Go back to home</button>
    </div>
  )
}

export default RegisterCustomer