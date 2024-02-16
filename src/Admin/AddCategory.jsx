import React, { useState } from 'react'
import './AddFromAdmin.css'
const AddCategory = () => {

    const [category,setCategory]=useState({
        categoryName:"",
        categoryDescription:""
    })

    const[categoryStatus,setCategoryStatus]=useState("")

    const addCat=(e)=>{
        e.preventDefault()
        const options={
            method: "POST",
            headers: { "content-type": "application/json" },
            body:JSON.stringify({
                categoryName:category.categoryName,
                categoryDescription:category.categoryDescription
            })
        }
        fetch("http://localhost:8080/add-category")
        .then((response)=>{
            if(!response.ok){
                throw new Error("Something went wrong")
            }
            else
                return response.json()
        })
        .then((data)=>{
            if(data){
                setCategoryStatus("Category added to the list")
            }
            else{
                setCategoryStatus("Couldn't insert category")
            }
        })
    }

  return (
    <div>
        <div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="category">Category Name</label>
          <input type="text" id="category" name="categoryName" required onChange={(e)=>{setCategory((prevState) => ({
                  ...prevState,
                  categoryName: e.target.value,
                }));}}/>
        </div>
        <div class="form-group">
          <label for="cdesc">Category Description</label>
          <textarea name="categoryDescription" id="cdesc" rows="10" cols="50" required 
          onChange={(e)=>{setCategory((prevState) => ({
            ...prevState,
            categoryDescription: e.target.value,
          }));}}
          ></textarea>
        </div>
        <button class="form-submit-btn" onClick={(e)=>{addCat(e)}}>Add</button>
      </form>
    </div>
    <h2>{categoryStatus}</h2>
    </div>
  )
}

export default AddCategory