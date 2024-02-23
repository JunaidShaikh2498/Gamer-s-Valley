import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFAQs = () => {
const user = JSON.parse(localStorage.getItem("user"))
  const [faq, setFaq] = useState({
    question: "",
    answer: "",
    categoryId: 0,
  });
  const navigate = useNavigate()
  const [quesStatus,setQuesStatus]=useState("")
  
  const addQuestion = (e)=>{
    e.preventDefault()
    const options= {
        method:"POST",
        headers: {"Content-Type": "application/json","Authorization":`Bearer ${user.accessToken}`},
        body:JSON.stringify(faq)
    }
    fetch(`http://localhost:8080/addfaq`,options)
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
            setQuesStatus("Question added")
            navigate("/faqs",{state:{faq}})
        }
    })
  }
  return (
    <div className="form-body">
      <div class="form-container">
        <form class="form">
          <div class="form-group">
            <label for="que">Question Title</label>
            <input
              type="text"
              id="que"
              name="question"
              required
              onChange={(e) => {
                setFaq((previousState) => ({
                  ...previousState,
                  question: e.target.value,
                }));
              }}
            />
          </div>
          <div class="form-group">
            <label for="pdesc">Product Description</label>
            <textarea
              name="answer"
              id="ans"
              rows="10"
              cols="50"
              required
              onChange={(e) => {
                setFaq((previousState) => ({
                  ...previousState,
                  answer: e.target.value,
                }));
              }}
            >
            </textarea>
          </div>
          <div class="form-group">
            <select
              onChange={(e)=>{
                setFaq((previousState) => ({
                    ...previousState,
                    categoryId: e.target.value,
                  }));
              }}
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>Select Category</option>
              <option value="20000">Processors CPU</option>
              <option value="20001">Motherboard</option>
              <option value="20002">GPU</option>
              <option value="20003">RAM</option>
              <option value="20004">SSD</option>
              <option value="20005">HDD</option>
              <option value="20006">CPU Case</option>
              <option value="20007">Cooling Fans</option>
              <option value="20008">Keyboard</option>
              <option value="20009">Mouse</option>
              <option value="20010">Headsets</option>
              <option value="20015">External HDD</option>
            </select>
          </div>
          <button class="form-submit-btn" onClick={(e)=>{addQuestion(e)}}>ADD FAQ</button>
        </form>
        <h2>{quesStatus}</h2>
      </div>
    </div>
  );
};

export default AddFAQs;
