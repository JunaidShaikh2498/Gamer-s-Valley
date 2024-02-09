import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Slices/loginSlice'
import { useNavigate } from 'react-router-dom'

const CustomerDash = () => {
  const dispatch = useDispatch()
  //var loginStatus = useSelector(state=>state.logged.loggedIn)
  const navigate = useNavigate()
  const handleLogout = ()=>{
    
    dispatch(logout())
    navigate('/login')
  }
  return (
    <div>
        <h1>Welcome to Gamer's Valley</h1>
        <button className='btn btn-danger' onClick={()=>handleLogout()}>Log Out</button>
    </div>
  )
}

export default CustomerDash