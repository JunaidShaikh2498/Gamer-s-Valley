import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Slices/loginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.logged.loggedIn);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const users = [
    {
      username:"cust1",
      password:"pass123",
      role:1
    },
    {
      username:"exp1",
      password:"pwd123",
      role:2
    },
  ]
  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u=>u.username===loginData.username && u.password===loginData.password)
   
      dispatch(login(user));
      if(loginState && user.role===1){
        navigate("/dashboard");
      }
      else if(loginState && user.role===2){
        navigate('/expdash')
      }
      else{
        navigate("/login");
      }
      
  };

  return (
    <div className="form-container">
      <form className="fonm-control">
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputUname"
              placeholder="Username"
              value={loginData.username}
              onChange={(e) => {
                setLoginData((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }));
              }}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
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
        </div>
        <div>
          <input
            type="submit"
            value="Login"
            className="btn btn-success"
            onClick={(e) => {
              handleLogin(e);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
