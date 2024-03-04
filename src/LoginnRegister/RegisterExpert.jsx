import React, { useReducer, useState } from "react";
import './RegisterCSS.css'
import { useNavigate } from "react-router-dom";
const RegisterExpert = () => {
  const [formValid, setFormValid] = useState(false);
  const [status,setStatus]=useState("")
  const navigate = useNavigate()
 const [isReg,setIsReg]=useState(false)
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
    approved:{value:0,valid:true,touched:true,error:""},
    role:{value:3,valid:true,touched:true,error:""}
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

  const registerExpert = (e)=>{
    e.preventDefault();
    console.log(expert);
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        firstname: expert.firstname.value,
        lastname: expert.lastname.value,
        email: expert.email.value,
        qualification: expert.qualification.value,
        username:expert.username.value,
        password: expert.password.value,
        approved:expert.approved.value,
        roleId: expert.role.value
      })
    };
    console.log(options.body);
    fetch("http://localhost:8080/registered/saveExp",options)
    .then((response)=>{
      if(!response.ok){
        throw new Error("Cannot register")
      }
    })
    .then((data)=>{setIsReg(data)
      console.log(isReg,data);
      // if(data){
      //   navigate('/login')
      // }
      // else{
      //   navigate("/re")
      // }
      if(data===true){
        navigate("/")
      }
      else{
          setStatus("Email has been sent to you")
      }
    })

    
  }

  return (
    <div className="container">
      <form >
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <div class="mb-3">
          <label for="exampleInputFname" class="form-label">
          <b>  First Name</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="fname"
            
            aria-describedby="emailHelp"
            defaultValue={expert.firstname.value}
            onChange={(e) => {
              handleChange("firstname", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("firstname", e.target.value);
            }}
          />
          <span>{expert.firstname.error}</span>
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">
           <b>Last Name</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="lname"
            defaultValue={expert.lastname.value}
            onChange={(e) => {
              handleChange("lastname", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("lastname", e.target.value);
            }}
          />
          <span>{expert.lastname.error}</span>
        </div>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">
           <b> Email ID</b>
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="(eg- chahat@gmail.com)"
            defaultValue={expert.email.value}
            onChange={(e) => {
              handleChange("email", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("email", e.target.value);
            }}
          />
          <span className="invalid">{expert.email.error}</span>
        </div>
        <div class="mb-3">
          <label for="qualification" class="form-label">
            <b>Qualification</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="qualification"
            placeholder="(please write under 100 characters)"
            defaultValue={expert.qualification.value}
            onChange={(e) => {
              handleChange("qualification", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("qualification", e.target.value);
            }}
          />
        </div>
        
        <div class="mb-3">
          <label for="exampleInputUname" class="form-label">
            <b>UserName</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="uname"
            aria-describedby="emailHelp"
            defaultValue={expert.username.value}
            required
            onChange={(e) => {
              handleChange("username", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("username", e.target.value);
            }}
          />
          <span className="invalid">{expert.username.error}</span>
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">
           <b> Password</b>
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            defaultValue={expert.password.value}
            onChange={(e) => {
              handleChange("password", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("password", e.target.value);
            }}
          />
          <span className="invalid">{expert.password.error}</span>
        </div>

        <button
          type="submit"
          disabled={!formValid}
          onClick={(e) => {
            registerExpert(e);
          }}
          class="btn btn-success"
        >
          Register
        </button>
      </form>
      <h3>{status}</h3>
      <button className="btn btn-outline-primary" onClick={()=>{navigate("/")}}>Go back to home</button>
    </div>
  );
};

export default RegisterExpert;
