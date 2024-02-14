import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Slices/loginSlice";
import { useNavigate } from "react-router-dom";
import './RegisterCSS.css'

const Login = () => {
  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.logged.loggedIn);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [role,setRole]=useState(0)
  const handleLogin = (e) => {
    e.preventDefault();
    const options={
      method: "POST",
      headers: { "content-type": "application/json" },
      body:JSON.stringify({
        username:loginData.username,
        password:loginData.password
      })
    }
    fetch("http://localhost:8080/login",options)
    .then((response)=>{return response.json()})
    .then((data)=>{setRole(data)
      console.log(data);
      // if(role===2){
      //   dispatch(login())
      //    if(loginState){
      //     console.log(loginState);
      //     navigate("/home")
      //    }
           
      //    }
      //    if(role===3){
      //      dispatch(login())
      //      if(loginState){
      //        navigate("/expdashboard")
      //      }
      //    }
      //    if(role===-1){
      //      alert("Invalid Credentials")
      //      navigate("/login")
      //    }
      switch(role){
        case 2:
          navigate('/home')
          dispatch(login())
          break
        case 3:
          navigate('/expdashboard')
          dispatch(login())
          break
        default:
          alert("Invalid Credentials")
          navigate("/login")
      }
    })
   
  };

  return (
    <div className="form-container">
      <form className="fonm-control">
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
              required
              onChange={(e) => {
                setLoginData((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }));
              }}
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
              required
              onChange={(e) => {
                setLoginData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
            />
          
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
