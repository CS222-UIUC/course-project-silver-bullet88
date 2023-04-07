import React, { useState, useEffect, useRef } from "react";
import "./UsersHome.css";
import styled from "styled-components";


// button for users to add answers
const Button = styled.button `
    background-color: #E84A27;
    &:hover {
        background-color: #283593;
    }
`



// function clickMe() {
//     alert('Add your answer to this question!');
// }



export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')
    const [click, setClick] = useState(false)

    const frontEl = useRef()
    const backEl = useRef()

    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }

    useEffect(setMaxHeight, [flashcard.question, flashcard.answer])

    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])

    // pop-up text box
    function Popup(props) {
        return (props.trigger) ? (
            <div className="popup">   
                <div className="TextBox">
                    <button className="close-btn" onClick={() => props.setTrigger(false) & setFlip(flip)}>
                        close
                    </button>
                    { props.children }
                </div>
            </div>
        ) : "";
    }


    return (
        <div 
            className={`card ${flip ? 'flip' : ''}`}
            style={{ height: height }}
            onClick={() => setFlip(!flip || !(flip && click))}
        >   
            {/* front element */}
            <div className="front" ref={frontEl}>
                {flashcard.question}
            </div>

            {/* back element */}
            <div className="back" ref={backEl}>
                <div className="back-Answer">
                    {flashcard.answer}
                </div>
                
                <div className="back-Button">
                    <Button onClick={() => setClick(true)}>
                        Add Answer!
                    </Button>

                    <Popup trigger = {click} setTrigger={setClick}> 
                        <h3>Test Popup</h3>
                        <form>  
                            <label>Your Answer:</label>
                            <textarea
                                required
                            >
                            </textarea>
                        </form>
                    </Popup>
                </div>
                
            </div>

            {/* {flip ? flashcard.answer : flashcard.question} */}
        </div>
    )
}