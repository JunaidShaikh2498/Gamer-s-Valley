import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AnswerQuestions = ({ questionId }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const expertId = JSON.parse(localStorage.getItem("expert")).expertId;
  const [answers, setAnswers] = useState([]);
  const [status, setStatus] = useState("");
  const [answer, setAnswer] = useState("");
  const [unanswered, setUnanswered] = useState(
    "This question has not been answered yet"
  );
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/getanswer/${questionId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${user.accessToken}` },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Cant fetch questions right now");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setAnswers(data);
      });
  }, []);

  const answerQuestion = (e) => {
    e.preventDefault();
    const answerOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify({
        ans: answer,
      }),
    };
    fetch(
      `http://localhost:8080/answer/${questionId}?eid=${expertId}`,
      answerOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Couldnt submit question");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          setStatus("The question has been answered");
          navigate("/expdashboard");
          console.log(status);
        } else {
          setStatus("Something went wrong while submitting");
        }
      })
      .catch(() => {
        setStatus("Answer not submitted");
      });
  };

  return (
    <div>
      <ul>
        {answers.map((ans) => {
          console.log(ans.answer);
          return (
            <div key={ans.answerId}>
              {ans.answer === null ? (
                unanswered
              ) : (
                <>
                  <h3>{ans.expert.firstname}</h3>
                  <li>{ans.answer}</li>
                </>
              )}
            </div>
          );
        })}
      </ul>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        name="que"
        rows="3"
        value={answer}
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
      ></textarea>
      <button
        className="btn btn-outline-primary btn-lg"
        onClick={(e) => {
          answerQuestion(e);
        }}
      >
        Answer
      </button>
      <h2>{status}</h2>
    </div>
  );
};

export default AnswerQuestions;
