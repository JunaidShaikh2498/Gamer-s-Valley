import React from 'react'
import '../LoginnRegister/RegisterCSS.css'
import './CustExpertCards.css'


export const Register = () => {
  return (
    <div>
        <form>
            <a href='/rc'>
                <button className="btn btn-outline-success" type="button">
                    Customer Registeration
                </button>
            </a>
            

            <a href='/re'>
            <button className="btn btn-outline-success" type="button">
              Expert Registeration
            </button></a>
            
        </form>
    </div>
  )
}
