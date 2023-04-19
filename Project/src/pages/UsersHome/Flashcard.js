import React, { useState, useEffect, useRef } from "react";
import "./UsersHome.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// button for users to add answers
const Button = styled.button `
    background-color: #E84A27;
    &:hover {
        background-color: #283593;
    }
    
`

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')
    const [buttonClick, setbuttonClick] = useState(false)

    console.log(useParams());
    let { questionID } = useParams();
    questionID = flashcard.id;

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

    return (
        <div 
            className={`card ${flip ? 'flip' : ''}`}
            style={{ height: height }}
            onClick={() => setFlip(!(flip || buttonClick))}
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
                    <Link to={'/answer/'+questionID}>
                        <Button onClick={() => setbuttonClick(true)}>
                            Add Answer!
                        </Button>
                    </Link>
                </div>
            </div>

            {/* {flip ? flashcard.answer : flashcard.question} */}
        </div>
    )
}