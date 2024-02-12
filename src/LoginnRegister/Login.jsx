import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Slices/loginSlice";
import { useNavigate } from "react-router-dom";
import CustomerDash from "./CustomerDash";
import './RegisterCSS.css'

const Login = () => {
  const users = useSelector((state) => state.logged.users);
  const dispatch = useDispatch();

  const loginState = useSelector((state)=>state.logged.loggedIn)
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = loginData;

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      dispatch(login(user));
      navigate("/dashboard");
    } else navigate("/login");
  };

  return (
    <div>
      {!loginState?<form>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
           <b>Username</b>
          </label>
          
            <input
              type="text"
              class="form-control"
              id="inputUname"
              placeholder="(Enter your Username)"
              value={loginData.username}
              onChange={(e)=>{setLoginData(prevState=>({
                ...prevState,
                username:e.target.value
              }))}}
            />
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
           <b> Password</b>
          </label>
          
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              placeholder="(Enter your password)"
              value={loginData.password}
              onChange={(e)=>{setLoginData(prevState=>({
                ...prevState,
                password:e.target.value
              }))}}
            />
          
        </div>
        <div>
          <input type="submit" value="Login" className="btn btn-success" onClick={(e)=>{handleLogin(e)}} />
        </div>
      </form>:<CustomerDash/>}
      
    </div>
  );
};

export default Login;
