import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

import Flashcard from './Flashcard';
export default function FlashcardList() {
    const [flashcards, setFlashcards] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(flashcards);
     var answer = "No Answers Yet :(Don't be scared. The things out there that are unknown aren't scary in themselves. They are just unknown at the moment. Take the time to know them before you list them as scary. Then the world will be a much less scary place for you."
    useEffect(
      () => 
        onSnapshot(collection(db, "Questions"), (snapshot) => 
          setFlashcards(snapshot.docs.map(doc => ({...doc.data(), id: doc.id, answer:doc.get("answer")}))),
          setLoading(false)
        ), [loading]
    );
  
    if (loading) {
      return <h1>loading firebase data...</h1>;
    }
    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id}></Flashcard>
            })}
        </div>
    )
}



