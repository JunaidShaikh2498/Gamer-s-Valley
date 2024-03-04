import React, { useEffect, useState } from "react";

const AnswerList = ({ questionId }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [answers, setAnswer] = useState([]);
  const [unanswered,setUnanswered]=useState("This question has not been answered yet")
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
        setAnswer(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {answers.map((ans) => {
          console.log(ans.answer);
          return (
            <div key={ans.answerId}>
              {ans.answer===null?
              unanswered:<>
              <h3>{ans.expert.firstname}</h3>
              <li>{ans.answer}</li>
              <hr style={{width:"100%",color:"white"}}/>
              </>
              }
              
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AnswerList;
