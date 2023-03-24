import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./UsersHome.css";

const UsersHome = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(questions);
  useEffect(
    () => 
      onSnapshot(collection(db, "Questions"), (snapshot) => 
        setQuestions(snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))),
        setLoading(false)
      ), 
      
    [loading]
  );

  if (loading) {
    return <h1>loading firebase data...</h1>;
  }

  return (
    <div className="container">
      <h1>Received Questions:</h1>
      <ul>  
        {questions.map((question) => (
          <li key={question.id}>  
            {question.question}
          </li>
        ))}
      </ul>
      <h1>no answers yet :(</h1>
    </div>
  );
};

export default UsersHome;