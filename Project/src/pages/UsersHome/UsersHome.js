import React from "react";
import "./UsersHome.css";
import FlashcardList from "./FlashcardList";
import {NavLink} 
    from "../../components/Navbar/NavbarElements";

const UsersHome = ({flashcards}) => {
    return (
      <div className="container">
        <FlashcardList flashcards={flashcards}></FlashcardList>
        <h2>⬇️ Here is ur Question box link! Share it with ur friends 💗</h2>
        <NavLink className="switch-link" to="/question">
        click here
        </NavLink>
        
      </div>
    )
};

export default UsersHome;