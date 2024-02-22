import React, {  useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../Slices/loginSlice";
import { useNavigate } from "react-router-dom";
import './Login2CSS.css'
//import "./RegisterCSS.css";
//import CategoryPage from "../products/CategoryPage";

const Login = () => {
  const dispatch = useDispatch();

  //const loginState = useSelector((state) => state.logged.loggedIn);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        username: loginData.username,
        password: loginData.password,
      }),
    };
    fetch("http://localhost:8080/login", options)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.username === null) {
          setLoginError("Invalid Credentials");
          navigate("/login");
        }
        switch (data.roleId) {
          case 1:
            dispatch(login());
            navigate("/admin");
            break;

          case 2:
            dispatch(login());
            console.log(data);
            localStorage.setItem("user", JSON.stringify(data));
            // dispatch(loginCustomer())
            navigate("/home");
            dispatch(login());
            break;
          case 3:
            if (data.approved === 1) {
              localStorage.setItem("user", JSON.stringify(data));
              navigate("/expdashboard");
              dispatch(login());
              // dispatch(loginExpert())
            } else {
              setLoginError("Wait for admin approval");
            }
            break;
          default:
            return;
        }
      });
  };

  return (
    <div className="centered-div">
      <div className="cardl2">
        <div className="card2l2">
          <form className="forml2">
            <p id="headingl2">Login</p>
            <div className="fieldl2">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                className="inputl2-icon"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
              </svg>
              <input
                type="text"
                className="inputl2-field"
                placeholder="Username"
                required
                value={loginData.username}
                onChange={(e) => {
                  setLoginData((prevState) => ({
                    ...prevState,
                    username: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="fieldl2">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                className="inputl2-icon"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
              </svg>
              <input
                type="password"
                required
                className="inputl2-field"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => {
                  setLoginData((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="btnl2">
              <button className="button1l2"  onClick={(e) => {handleLogin(e)}}>Login</button>
              <button className="button2l2" onClick={()=>{navigate('/register')}}>Sign Up</button>
            </div>
            <button className="button3l2">Forgot Password</button>
          </form>
          <div>{loginError}</div>
        </div>
      </div>
    </div>
  );
};

export default Login;