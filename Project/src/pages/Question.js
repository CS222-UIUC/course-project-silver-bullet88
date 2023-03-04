import React, { useState } from 'react';

// I am Zhuoang Tao. I work on this part of the project.

const Question = () => {
  const [question,setTitle] = useState("e.g. What's your favourite color?");
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(question);
  }

  return (
    <div className= "question">
      <h1>Ask me anything here!</h1>
      <form onSubmit={handleSubmit}>
        <textarea type = "text"
          required
          value={question}
          onChange={(e)=>setTitle(e.target.value)}
        />
      </form>
      <button>Send</button>
    </div> 
  );
};
  
export default Question;