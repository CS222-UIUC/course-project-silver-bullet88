import React, { useEffect, useState } from "react";
import "./Answer.css";
// import FlashcardList from "../UsersHome/FlashcardList";
import { doc, getDoc, collection, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

// async function getDocument (coll, id) {
//     const snap = await getDoc(doc(db, coll, id))
//     if (snap.exists())
//       return snap.data()
//     else
//       return Promise.reject(Error(`No such document: ${coll}.${id}`))
// }

async function getDocument (docRef) {
    const docSnap = await getDoc(docRef);
    return docSnap
}

const Answer = () => {

    const href = window.location.href;
    const question_id = href.split('/')[4];
    console.log(question_id)

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
        <div>   
            <h1>Answer your Questions HERE!!!</h1>
            <form onSubmit={handleSubmit}>
        <textarea type = "text"
          required
          value={data}
          onChange={(e)=>setBody(e.target.value)}  placeholder= "answer here!" id="answer" name="answer" 
        />
        <button onClick={handleSubmit} disabled={!data}> Send</button>
        </form>
        </div>
    )
};

export default Answer;



