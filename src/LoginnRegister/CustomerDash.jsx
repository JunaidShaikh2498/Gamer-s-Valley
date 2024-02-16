import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../Slices/loginSlice'
import { useNavigate } from 'react-router-dom'

const CustomerDash = () => {
  const dispatch = useDispatch()
  
  const navigate = useNavigate()
  const goCat = ()=>{
    navigate('/home')
  } 
  return (
    <div>
        <h1>Welcome to Gamer's Valley</h1>
        <button className='btn btn-outline-primary' onClick={()=>goCat()}>Go to Categories</button>
        
    </div>
  )
}

export default CustomerDash