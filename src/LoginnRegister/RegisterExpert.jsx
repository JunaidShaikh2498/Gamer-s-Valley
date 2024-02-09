import React, { useReducer, useState } from "react";

const RegisterExpert = () => {
  const [formValid, setFormValid] = useState(false);

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
      },
    });
    if (
      expert.fname.valid &&
      expert.lname.valid &&
      expert.email.valid &&
      expert.password.valid
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
          error = "Invalid Name";
        }
        return { error, valid };
      case "lname":
        var lnmp = /^[A-Z][a-z]*$/;
        valid = lnmp.test(value);
        if (!valid) {
          error = "Invalid SurName";
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
        var pwdp = /^\d{1,4}(?:.\d{1,2})?$/;
        valid = pwdp.test(value);
        if (!valid) {
          error = "Password pattern not satisfied";
        }
        return { error, valid };
        case "uname":
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
    contact: {value: "", valid: false, touched: false, error: ""},
    username: { value: "", valid: false, touched: false, error: ""},
    experience:{ value: "", valid: false, touched: false, error: ""},
    password: { value: "", valid: false, touched: false, error: "" }
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
        fname: expert.fname.value,
        lname: expert.lname.value,
        email: expert.email.value,
        username:expert.username.value,
        password: expert.password.value,
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
            defaultValue={expert.fname.value}
            onChange={(e) => {
              handleChange("fname", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("fname", e.target.value);
            }}
          />
          <span>{expert.fname.error}</span>
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
          <span>{expert.lname.error}</span>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">
            Email ID
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            defaultValue={expert.email.value}
            onChange={(e) => {
              handleChange("email", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("email", e.target.value);
            }}
          />
          <span>{expert.email.error}</span>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
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
          <span>{expert.password.error}</span>
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
            defaultValue={expert.username.value}
            onChange={(e) => {
              handleChange("uname", e.target.value);
            }}
            onBlur={(e) => {
              handleChange("uname", e.target.value);
            }}
          />
          <span>{expert.username.error}</span>
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
    </div>
  );
};

export default RegisterExpert;
