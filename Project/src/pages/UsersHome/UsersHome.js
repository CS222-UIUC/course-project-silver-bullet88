import React from "react";
import "./UsersHome.css";
import FlashcardList from "./FlashcardList";

const UsersHome = ({flashcards}) => {
    return (
      <div className="container">
        <FlashcardList flashcards={flashcards}></FlashcardList>
      </div>
    )
};

export default UsersHome;