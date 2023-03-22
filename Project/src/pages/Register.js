import React, { useState } from "react";
// I'll work on the signup page (Jinyu Ding)
// !!!!!!! Pls don't edit this file <3
const Register = (props) => {
  // track state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // print email
    console.log(email);
  }
  
  return(
    <>
    <div className= "login">
    {/* <div style={{textAlign:"center", display:"flex", minHeight: "100vh",
        alignItems: "center", justifyContent: "center", backgroundColor:"#F7944D"}}> */}
    
      <form className = "login-form" onSubmit={handleSubmit}>
        {/* email */}
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='your email' id="email" name="email" />
        {/* password */}
        <label htmlFor="password">password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='your password' id="password" name="password" />
        {/* button */}
      <button type="submit"> Log In </button>
      </form>
      <button> Don't have an account? Register here! </button>
      {/* onClick={() => props.onFormSwitch('register')} */}
    </div>

    </>
  )



}
export default Register;