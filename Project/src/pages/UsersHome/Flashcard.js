import React, { useState, useEffect, useRef } from "react";
import "./UsersHome.css";
export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')

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
            onClick={() => setFlip(!flip)}
        >   
            {/* front element */}
            <div className="front" ref={frontEl}>
                {flashcard.question}
            </div>

            {/* back element */}
            <div className="back" ref={backEl}>
                {flashcard.answer}
            </div>

            {/* {flip ? flashcard.answer : flashcard.question} */}
        </div>
    )
}