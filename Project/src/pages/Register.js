import React, { useState } from "react";
import {NavLink} 
    from "../components/Navbar/NavbarElements";
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
// I'll work on the signup page (Jinyu Ding)
// !!!!!!! Pls don't edit this file <3
const Register = () => {
  // track state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // // print email
    // console.log(name);
    try {
      const docName = addDoc(collection(db, "Users"), {name, email, password});
      console.log("Document written with ID: ", docName.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  return(
    <>
    <div className= "login">
    {/* <div style={{textAlign:"center", display:"flex", minHeight: "100vh",
        alignItems: "center", justifyContent: "center", backgroundColor:"#F7944D"}}> */}
    
      <form className = "login-form" onSubmit={handleSubmit}>
        {/* name */}
        <label htmlFor="name">Username</label>
        <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder='username' />
        {/* email */}
        <label for="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='your email' id="email" name="email" />
        {/* password */}
        <label for="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='your password' id="password" name="password" />
        {/* button */}
      <button className="button R-button" type="submit"> Create Account </button>
      </form>
      
        <NavLink className="switch-link" to="/login">
        Already have an account? Login here!
        </NavLink>
      
      
    </div>

    </>
  );
}
export default Register;