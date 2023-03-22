import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../firebase';

const Question = () => {
  const [question,setBody] = useState("");

  const handleSubmit =(e)=>{
    e.preventDefault();
    
    console.log(question);
    try {
      const docRef = addDoc(collection(db, "Questions"), {question});
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className= "question">
      <h1>Ask me anything here!</h1>
      <form onSubmit={handleSubmit}>
        <textarea type = "text"
          required
          value={question}
          onChange={(e)=>setBody(e.target.value)}  placeholder= "e.g What's your favorite color?" id="question" name="question" 
        />
        <button>Send</button>
      </form>
    </div> 
  );
};
  
export default Question;
