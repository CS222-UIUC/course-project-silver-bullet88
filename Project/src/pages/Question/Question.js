import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../../firebase';
import Modal from "react-modal";
import FlashcardList from "../Question/FlashcardList.js";

const Question = () => {
  
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  const [question,setBody] = useState("");

  const handleSubmit =async (e)=>{
    e.preventDefault();
    
    console.log(question);
    try {
      var answer = "";
      const docRef = addDoc(collection(db, "Questions"), {question,answer});
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    await delay(300);
    setBody("");
  };


  const [isOpen, setIsOpen] = useState(false);

  async function toggleModal() {
    await delay(300);
    setIsOpen(!isOpen);
  }

  return (
    <div className= "question">
      <h1>Ask me anything here!</h1>
      <form onSubmit={handleSubmit}>
        <textarea type = "text"
          required
          value={question}
          onChange={(e)=>setBody(e.target.value)}  placeholder= "e.g What's your favorite color?" id="question" name="question" 
        />

        <button onClick={toggleModal} disabled={!question}> Send</button>
        <Modal
          isOpen= {isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}

          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.4)',
              paddingTop: '35%',
              paddingLeft: '38%',
              paddingRight: '38%',
              paddingBottom: '35%',
            },
            content: {
              
              border: '1px solid #888',
              borderRadius: '10px',
              background: '#fefefe',
              textAlign: 'center',
              paddingTop: 10,
              paddingRight: 10,
            }
          }}
        >
          <span onClick={toggleModal} className="close">&times;
          </span>
          <div>Submit Successfully!</div>
          <button onClick={toggleModal}>Ask another one!
          
          </button>

      </Modal>
      </form>
      <div className="container">
        <FlashcardList flashcards></FlashcardList>
      </div>
    </div> 
  );
};
  
export default Question;
