import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Slices/loginSlice'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  
  //const loggedStatus = useSelector(state =>state.logged.loggedIn)
  const stayLogged = JSON.parse(localStorage.getItem("loginStat"))
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut= ()=>{
    dispatch(logout())
    navigate("/login")
  }
  
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-secondary" style={{opacity:0.7}} data-bs-theme="dark" >
      <div className="container-fluid bg-" style={{justifyContent:'space-between'}}>
        <Link className="navbar-brand" to="/">
          Gamer's Valley
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"> 
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {!stayLogged?
          <>
                <button className="btn btn-outline-success" onClick={()=>{navigate("/login")}} type="button">
                Login
                </button>
            
            
                <button className="btn btn-outline-danger" onClick={()=>{navigate("/register")}}type="button">
                    Register
                </button>
            </>
            :<button className="btn btn-outline-danger" onClick={()=>{handleLogOut()}}>Logout</button>}
            
        </div>
      </div>
    </nav>
    </div>
  )
}