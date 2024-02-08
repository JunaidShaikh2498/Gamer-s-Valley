import React, { useReducer, useState } from 'react'

const RegisterUser = () => {

  const [formValid, setFormValid] = useState(false);

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
      user.fname.valid &&
      user.lname.valid &&
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
      case "fname":
        var fnamep = /^[A-Z][a-z]*$/;
        valid = fnamep.test(value);
        if (!valid) {
          error = "Invalid empno";
        }
        return { error, valid };
      case "lname":
        var lnmp = /^[A-Z][a-z]*$/;
        valid = lnmp.test(value);
        if (!valid) {
          error = "Invalid Name";
        }
        return { error, valid };
      case "email":
        var mailp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        valid = mailp.test(value);
        if (!valid) {
          error = "Invalid Job title";
        }
        return { error, valid };
      case "password":
        var pwdp = /^\d{1,4}(?:.\d{1,2})?$/;
        valid = pwdp.test(value);
        if (!valid) {
          error = "Salary amount exceeded";
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
    fname: { value: "", valid: false, touched: false, error: "" },
    lname: { value: "", valid: false, touched: false, error: "" },
    email: { value: "", valid: false, touched: false, error: "" },
    username:{value: "", valid: false, touched: false, error: ""},
    password: { value: "", valid: false, touched: false, error: "" },
    address: { value: "", valid: false, touched: false, error: "" }
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
        fname: user.fname.value,
        lname: user.lname.value,
        email: user.email.value,
        username: user.username.value,
        password: user.password.value,
      }),
    };
  }

  return (
    <div>
        <form className="">
        <div class="mb-3">
          <label for="exampleInputFname" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            id="fname"
            aria-describedby="emailHelp"
            defaultValue={user.fname.value}
            onChange={(e) => {
              handleChange("fname", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("fname", e.target.value);
            }}
          />
          <span>{user.fname.error}</span>
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id="lname"
            defaultValue={""}
            onChange={(e) => {
              handleChange("lname", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("lname", e.target.value);
            }}
          />
          <span>{user.lname.error}</span>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">
            Email ID
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
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
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password  "
            class="form-control"
            id="password"
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
        
        <div class="mb-3">
          <label for="exampleInputFname" class="form-label">
            UserName
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
    </div>
  )
}

export default RegisterUser