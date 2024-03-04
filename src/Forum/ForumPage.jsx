import React, { useEffect, useState } from "react";
import AnswerList from "./AnswerList";
import { useNavigate } from "react-router-dom";
import AnswerQuestions from "./AnswerQuestions";
import "./Forums.css"

const ForumPage = () => {
  const [questions, setQuestions] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/getquestions", {
      method: "GET",
      headers: { "Authorization": `Bearer ${user.accessToken}` },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Cant fetch questions right now");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        const questionsWithIsOpen = data.map((question) => ({
          ...question,
          isOpen: false,
        }));
        setQuestions(questionsWithIsOpen);
        console.log(questions);
      })
      .catch(() => {
        console.log("Error loading questions");
      });
  }, []);

  const handleAccordionClick = (questionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.questionId === questionId
          ? { ...question, isOpen: !question.isOpen }
          : question
      )
    );
  };

  return (
    <div className="forum-page">
      <h1>Forums</h1>
      {user.roles[0] === "Customer"?<button
        type="button"
        class="btn btn-outline-light"
        style={{ display: "flex", justifyContent: "flex-end" }}
        onClick={() => {
          navigate("/askadvice");
        }}
      >
        Ask questions
      </button>:<span></span>}
      
      {questions.map((question) => (
        <>
        <div key={question.customer.questionId}>
          <h2
            onClick={() => handleAccordionClick(question.questionId)}
            style={{ cursor: "pointer" }}
          >
           Q. {question.question}
          </h2>
          <h3>Answers</h3>
          {question.isOpen &&
            ((user.roles[0] === "Customer")||(user.roles[0]==="Admin") ? (
              <AnswerList questionId={question.questionId} />
            ) : 
              <AnswerQuestions questionId={question.questionId} />
            )}
        </div>
        <hr style={{width:"100%",color:"white"}}/>
        </>
      ))}
    </div>
  );
};

export default ForumPage;
