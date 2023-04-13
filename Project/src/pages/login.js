import React, { useState } from "react";
import {NavLink} 
    from "../components/Navbar/NavbarElements";
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../firebase';
import UsersHome from "./UsersHome/UsersHome";
// I'll work on the signup page (Jinyu Ding)
// !!!!!!! Pls don't edit this file <3
const Login = () => {
  // track state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // print email
    console.log(email);

    const userRef = collection(db, "Users");
    const q = query(userRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      if(doc.data().password === password) {
        console.log("success")
        setError(0);
        // store login info into sessionStorage
        sessionStorage.setItem("user_id", email);
        // flag true if user logged in
        sessionStorage.setItem("is_login", true);

        window.location="/users-home"
      } else {
        console.log("failure")
        setError(1);
      }
    });
    
    
  }
  // error func
  const errorMessage = () => {
    return (
    <div
        className="error"
        style={{
        display: error===1 ? '' : 'none',
        }}>
        <h4>Wrong pwd or email. Please enter again! 🥺</h4>
    </div>
    );
  };
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
      {/* print error message */}
      <div className="messages"> {errorMessage()} </div>
    </div>
  );
};
export default Login;