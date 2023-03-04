import React, { useState } from "react";
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
    <div style={{backgroundColor:"#FFFFFF"}}><h1>Nice to see u!</h1>
    <div style={{textAlign:"center", display:"flex", minHeight: "100vh",
        alignItems: "center", justifyContent: "center", backgroundColor:"#F7944D"}}>
    
    <form onSubmit={handleSubmit}>
      {/* email */}
      <label for="email">email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='your email' id="email" name="email" />
      {/* password */}
      <label for="password">password</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='your password' id="password" name="password" />
      {/* button */}
      <button style={{border: "none", backgroundColor:"white", padding:20, borderRadius:10, cursor:"pointer", color:"#7439da" }} 
      type="submit"> Log In </button>
    </form>
    </div>
    </div>
  );
};
export default Login;