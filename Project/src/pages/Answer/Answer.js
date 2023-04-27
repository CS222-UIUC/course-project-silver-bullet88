import React, { useEffect, useState } from "react";
import "./Answer.css";
import FlashcardList from "../UsersHome/FlashcardList"
import { doc, getDoc, collection, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";


const Answer = ({flashcards}) => {

    const href = window.location.href;
    const question_id = href.split('/')[4];
    let question = href.split('/')[5];

    if (question.indexOf('%20') > -1) {
      const l = question.split('%20');
      question = l.join(" ");
      console.log(question);
    }

    console.log(href)
    console.log(question_id)
    console.log(question)

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
      const [data,setBody] = useState("");
    
      const handleSubmit =async (e)=>{
        e.preventDefault();
        
        console.log(data);
        try {
          const docRef = updateDoc(doc(db, "Questions", question_id), {answer: data});
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error updating document: ", e);
        }
        await delay(300);
        setBody(data);
      };
    

    return (
        <div className="Answerbox">   
            <h1>Answer your Questions HERE!!!</h1>
            <h2>Question to Answer: {question}</h2>
            <form onSubmit={handleSubmit}>
              
            <textarea type = "text"
              required
              value={data}
              onChange={(e)=>setBody(e.target.value)}  placeholder= "answer here!" id="answer" name="answer" 
            />
            <button onClick={handleSubmit} disabled={!data}> Send</button>
            </form>
        {/* <FlashcardList flashcards={flashcards}></FlashcardList> */}
        </div>
    )
};

export default Answer;



