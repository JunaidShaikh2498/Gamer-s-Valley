import React, { useReducer, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const EditProfileCustomer = () => {
    const [formValid, setFormValid] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"))
    const updateCust = JSON.parse(localStorage.getItem("updatecust") )
    const navigate = useNavigate()
    const [isUp,setIsUp]=useState("")  
    const backToCustDash = ()=>{
    navigate("/homepage");
  };
  
  const handleChange = (key, value) => {
        const ipObj = validate(key, value);
        setCustomer({
        type: "insert",
        fld: key,
        data: {
            value: value,
            valid: ipObj.valid,
            touched: true,
            error: ipObj.error,
        },
        });
        if (
            customer.firstname.valid &&
            customer.lastname.valid &&
            customer.email.valid &&
            customer.contact.valid &&
            customer.username.valid
        )   {
                setFormValid(true);
            }
    }
    const validate = (key, value) => {
        let valid = true;
        let error = "";
        switch (key) {
          case "firstname":
            var fnamep = /^[A-Z][a-z]*$/;
            valid = fnamep.test(value);
            if (!valid) {
              error = "Starts with Capital letter";
            }
            return { error, valid };
          case "lastname":
            var lnmp = /^[A-Z][a-z]*$/;
            valid = lnmp.test(value);
            if (!valid) {
              error = "Starts with Capital Letter";
            }
            return { error, valid };
          case "email":
            var mailp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
            valid = mailp.test(value);
            if (!valid) {
              error = "Invalid email";
            }
            return { error, valid };
          
          case "contact":
            var contp = /^\d{10}$/
            valid = contp.test(value);
            if (!valid) {
              error = "Contact number should be 10 digit";
            }
            return { error, valid };
          
          case "password":
            var digit = /[\d]{1,}/;
            var special = /[\W_!@#$%^&]{1,}/;
            var capital = /[A-Z]{1,}/;
            var isCapital;
            var isDigit;
            var isSpecial;
    
            isCapital = capital.test(value);
            isDigit = digit.test(value);
            isSpecial = special.test(value);
    
            if ((value.length < 5) || (isCapital || isDigit || isSpecial)) {
              // $("#strength").html("Weak").css("color","red")
              error = "Weak password";
              valid = false;
            }
            if (isCapital && isDigit) {
              // $("#strength").html("Average").css("color","Orange")
              error = "Average password";
              valid = false;
            }
            if (isCapital && isSpecial) {
              // $("#strength").html("Average").css("color","Orange")
              error = "Average password";
              valid = false;
            }
            if (isDigit && isSpecial) {
              // $("#strength").html("Average").css("color","Orange")
              error = "Average password";
              valid = false;
            }
            if (isCapital && isDigit && isSpecial) {
              // $("#strength").html("Strong").css("color","green")
              error = "";
              valid = true;
            }
            return { error, valid };
            case "customername":
              var unamep = /^[a-z0-9_]+$/
    
              valid = unamep.test(value);
              if (!valid) {
                error = "customername not valid";
              }
              return { error, valid };
          default:
            return {};
        }
      };
    
      const updateCustomer = (e) => {
        e.preventDefault();
        console.log(customer);
        const options = {
          method: "PUT",
          headers: { 'Authorization': `Bearer ${user.accessToken}`,"content-type": "application/json" },
          body: JSON.stringify({
            firstname: customer.firstname.value,
            lastname: customer.lastname.value,
            email: customer.email.value,
            contact:customer.contact.value,
            address:customer.address.value,
            username: customer.username.value,
                      
          })
      };
      fetch(`http://localhost:8080/updateC/${updateCust.customerId}`,options)
      .then((response)=>{
        if(!response.ok){
            throw new Error("Something went wrong")
        }
        else{
            return response.json()
        }
    })
        .then((data)=>{setIsUp(data)
        if(isUp==="Updated Successfully")
        {
          navigate('/homepage')
          fetch(`http://localhost:8080/getcust/${updateCust.customerId}`,{
            method:"GET",
            headers:{"Authorization":`Bearer ${user.accessToken}`}
          })
          .then((response)=>{
            if(!response.ok){
                throw new Error("Something went wrong")
            }
            else{
                return response.json()
            }
        })
        .then((data)=>{
          if(data){
            localStorage.removeItem("updatecust")
            localStorage.setItem("updatecust",JSON.stringify(data))
            
          }
        })
        
        }
        else{
        navigate('/custdashboard/editProfile')
        }
        })
    };

    const initDetails = {
        firstname: { value: updateCust.firstname, valid: false, touched: false, error: "" },
        lastname: { value: updateCust.lastname, valid: false, touched: false, error: "" },
        email: { value: updateCust.email, valid: false, touched: false, error: "" },
        contact:{ value: updateCust.contact, valid: false, touched: false, error: "" },
        address:{ value: updateCust.address, valid: false, touched: false, error: "" },
        username:{value: updateCust.registered.username, valid: false, touched: false, error: ""},
      };
    
    const reducer = (state, action) => {
        switch (action.type) {
          case "insert":
            return { ...state, [action.fld]: action.data };
          case "reset":
            return initDetails;
          default:
            return {};
        }
    };
    const [customer, setCustomer] = useReducer(reducer, initDetails);
  return (
    <div>
        <h2>Edit Customer Profile</h2>
      <form className="edit-profile-form">
        <label>
          First Name:
          <input type="text" name="firstname" value={customer.firstname.value} onChange={(e)=>handleChange("firstname",e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastname" value={customer.lastname.value} onChange={(e)=>handleChange("lastname",e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={customer.email.value} onChange={(e)=>handleChange("email",e.target.value)} />
        </label>
        <br />
        <label>
          Contact:
          <input type="text" name="contact" value={customer.contact.value} onChange={(e)=>handleChange("contact",e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={customer.address.value} onChange={(e)=>handleChange("address",e.target.value)} />
        </label>
        <br />
        <label>
          customername:
          <input type="text" name="username" value={customer.username.value} onChange={(e)=>handleChange("username",e.target.value)} />
        </label>
        <br />
        <br />
        <button className='btn btn-primary' onClick={(e)=>{updateCustomer(e)}}>Save Changes</button>
        <button className='btn btn-secondary' onClick={()=>{backToCustDash()}}>Cancel</button>
      </form>
    </div>
  )
}

export default EditProfileCustomer