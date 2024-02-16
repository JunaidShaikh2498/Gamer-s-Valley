import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Slices/loginSlice'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const loggedStatus = useSelector(state=>state.logged.loggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogOut= ()=>{
    navigate("/login")
    dispatch(logout())
    console.log(loggedStatus)    

  }
  
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" >
      <div className="container-fluid bg-" style={{justifyContent:'space-between'}}>
        <a className="navbar-brand" href="/">
          Gamer's Valley
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
          {!loggedStatus?
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