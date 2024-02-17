import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, loginCustomer, loginExpert } from "../Slices/loginSlice";
import { useNavigate } from "react-router-dom";
import './RegisterCSS.css'
import CategoryPage from "../products/CategoryPage";

const Login = () => {
  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.logged.loggedIn);
  const[loginError,setLoginError]=useState("")
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });



  const [reg_id,setRegId]=useState()
  const [approved,setApproved]=useState()
  const [username,setUsername]=useState("")
  const [role_id,setRoleId]=useState()

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
    .then((data)=>{
      console.log(data);
      setApproved(data.approved)
      setRegId(data.registrationId)
      setUsername(data.username)
      setRoleId(data.roleId)
      switch(data.roleId){
        case 1:
          dispatch(login())
          navigate('/admin')
          break

        case 2:
          dispatch(login())
          // dispatch(loginCustomer())
          navigate('/home')
          dispatch(login())
          break
        case 3:
          if(data.approved===1)
          {navigate('/expdashboard')
          dispatch(login())
          // dispatch(loginExpert())
          navigate('/expdashboard')
        }
        else{
          setLoginError("Wait for admin approval")
        }
        break
        default:
          setLoginError("Invalid Credentials")
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
      <div>{loginError}</div>
    </div>
  );
};

export default Login;
