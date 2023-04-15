import React, { useEffect, useState } from "react";
import "./Answer.css";
// import FlashcardList from "../UsersHome/FlashcardList";
import { doc, getDoc, collection, onSnapshot } from "firebase/firestore";
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

    const [questions, setQuestions] = useState([]);
    // useEffect(() => {
    //     ;(async () => {
    //         const docRef = doc(db, "Questions", question_id);
    //         const docSnap = await getDoc(docRef);
    //         const doc = snapshots.docs.map
    //     })
    // })

    useEffect(
        () => 
          onSnapshot(collection(db, "Questions"), (snapshot) => 
            setQuestions(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
          ), []
      );
    console.log(questions)
    
    // getDoc(docRef)
    //     .then((doc) => {
    //         console.log(doc.data(), doc.id)
    //     })
    
    function getDocByID(array, id) {
        return array.find((element) => {
            return element.id === id;
          })
    }

    const doc = getDocByID(questions, question_id);
    console.log(doc)
    console.log(doc['question'])
    // console.log(doc['id'])
    

    return (
        <div>   
            <h1>Answer your Questions HERE!!!</h1>

        </div>

    )
};

export default Answer;