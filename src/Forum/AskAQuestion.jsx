import React, { useEffect, useState } from "react";
import "./Question.css"
import { useNavigate } from "react-router-dom";
const AskAQuestion = () => {
    const[question,setQuestion]=useState("")
    const[customer,setCustomer]=useState()
    const[status,setStatus]=useState("")
    const user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`http://localhost:8080/getCustByRegId/${user.id}`,{
            method:"GET",
            headers:{"Authorization":`Bearer ${user.accessToken}`}
        })
        .then(resp=>{
            if(!resp.ok){
                throw new Error("Customer not found")
            }
            else{
                return resp.json()
            }
        })
        .then((data)=>{setCustomer(data)
            console.log(customer);
        })
    },[])

    const askQuestion =(e)=>{
        e.preventDefault()
        const options ={
            method:"POST",
            headers:{"Content-type":"application/json","Authorization":`Bearer ${user.accessToken}`},
            body:JSON.stringify({
                que:question
            })
        }
        
        fetch(`http://localhost:8080/ask/${customer.customerId}`,options)
        .then((response)=>{
            if(!response.ok){
                throw new Error("Couldnt submit question")
            }
            else{
                return response.json()
            }
        })
        .then((data)=>{
            if(data){
                setStatus("Your question has been asked")
                navigate("/forums")
                console.log(status);
            }
            else{setStatus("Something went wrong while submitting")}
        })
        .catch(()=>{setStatus("Question not submitted")})
    }
    
    
  return (
    <div className="question-container">
      <form className="form-control">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Ask Advice
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            name="que"
            rows="3"
            value={question}
            onChange={(e)=>{setQuestion(e.target.value)}}
          ></textarea>
        </div>
        <div style={{justifyContent:"center"}}>
        <button className="btn btn-outline-primary btn-lg" onClick={(e)=>{askQuestion(e)}}>Ask</button>
        </div>
      </form>
      <div style={{color:"white"}}><h2>{status}</h2></div>
    </div>
  );
};

export default AskAQuestion;
