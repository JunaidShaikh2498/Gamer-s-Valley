import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../Slices/loginSlice'

const ExpertDash = () => {
    const dispatch = useDispatch()
  
  const navigate = useNavigate()
  const handleLogout = ()=>{
    
    dispatch(logout())
    navigate('/login')
  }
  return (
    <div>
         <h1>Hello Expert</h1>
        <button className='btn btn-danger' onClick={()=>handleLogout()}>Log Out</button>
    </div>
  )
}

export default ExpertDash