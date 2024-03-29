import React, {  useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../Slices/loginSlice";
import { useNavigate } from "react-router-dom";
import './Login.css'
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
    e.preventDefault()
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
        if(!response.ok){
          throw new Error("Credentials not found")
        }
        else{
          return response.json()
        }
      })
      .then((data) => {
        console.log(data);
        
         switch (data.roles[0]) {
          case "Admin":
            localStorage.setItem("user", JSON.stringify(data));
            dispatch(login());
            navigate("/admin");
            break;

          case "Customer":
            localStorage.setItem("user", JSON.stringify(data));
            dispatch(login());
            
            // dispatch(loginCustomer())
            navigate("/homepage");
            dispatch(login());
            break;
          case "Expert":
            fetch(`http://localhost:8080/getexpert/${data.id}`)
            .then(response=>response.json())
            .then((exp)=>{
              console.log(exp);
              if(exp.registered.approved===1){
                  localStorage.setItem("expert",JSON.stringify(exp))
                  localStorage.setItem("user", JSON.stringify(data));
                  dispatch(login());                   
                  navigate("/expdashboard");
              }
              else {
                setLoginError("Wait for admin approval");
              }
            })
            break;
          default:
            return;
         }
      })
      .catch(()=>{
        setLoginError("Invalid username or password")
        navigate("/login")
      })

      
  };

  return (
    <div className="centered-div">
      <div class="cardl2">
        <div class="card2l2">
        
          <form class="forml2">
          
            <p id="headingl2">Login</p>
            <div class="fieldl2">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                class="inputl2-icon"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
              </svg>
              <input
                type="text"
                class="inputl2-field"
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
            <div class="fieldl2">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                class="inputl2-icon"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
              </svg>
              <input
                type="password"
                required
                class="inputl2-field"
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
            <div style={{color:"white"}}>{loginError}</div> 
            <div class="btnl2">
              <button class="button1l2"  onClick={(e) => {handleLogin(e)}}>Login</button>
              <button class="button2l2" onClick={()=>{navigate('/register')}}>Sign Up</button>
            </div>
            <button class="button3l2">Forgot Password</button>
          </form>
        </div>
        
      </div>
      
    </div>
  );
};

export default Login;
