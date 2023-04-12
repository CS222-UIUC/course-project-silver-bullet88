import React from 'react';
import { NavLink } from 'react-router-dom';
// I'll work on the signup page (Jinyu Ding)
// !!!!!!! Pls don't edit this file <3
const Home = () => {
  return (
    <div>
      <h1>Welcome! This is a website for you to Q&A with your friends!</h1>
      <NavLink className="switch-link-question" to="/question">
        <h2>Ask Me A Question</h2>
      </NavLink>

      <NavLink className="switch-link-usersHome" to="/users-home">
        <h2>Click here for HomePage</h2>
      </NavLink>
    </div>
  );
};
  
export default Home;