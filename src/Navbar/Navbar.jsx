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
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid bg-" style={{justifyContent:'space-between'}}>
        <a className="navbar-brand" href="/">
          Gamer's Valley
        </a>
        {/*<button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
  </button>*/}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
            {/*<li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/setname">
                Customer Registration
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/adminlogin">
                Admin Login
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/insertEmp">
                Emp Registration
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/getEmpData">
                Database Data
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Products
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
  </li>*/}
          
          </ul>
          {!loggedStatus?
          <>
          <a href="/login">
                <button className="btn btn-outline-success" type="button">
                Login
                </button>
            </a>
            <a href="/register">
                <button className="btn btn-outline-danger" type="button">
                    Register
                </button>
            </a>
            </>
            :<button className="btn btn-outline-danger" onClick={()=>{handleLogOut()}}>Logout</button>}
            
        </div>
      </div>
    </nav>

  )
}