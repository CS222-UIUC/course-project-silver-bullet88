import React, { useState } from "react";
import {NavLink} 
    from "../components/Navbar/NavbarElements";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
// I'll work on the signup page (Jinyu Ding)
// !!!!!!! Pls don't edit this file <3
const Login = () => {
  // track state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // print email
    console.log(email);
  }
  return (
    <div className= "login">
      <form className = "login-form" onSubmit={handleSubmit}>
        {/* email */}
        <label for="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='your email' id="email" name="email" />
        {/* password */}
        <label for="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='your password' id="password" name="password" />
        {/* button */}
      <button className="button" type="submit"> Log In </button>
      </form>
      <NavLink className="switch-link" to="/register">
      Don't have an account? Register here!
      </NavLink>
    </div>
    // </div>
  );
};
export default Login;