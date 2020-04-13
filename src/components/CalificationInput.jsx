import React, { useState } from "react"
import Star from "../assets/svg/Star"
import "../assets/css/calification-input.css"

const getArrayFromInt = (num) => {
    let result = []
    for (let i = 0; num > i; ++i) {
        result.push(i)
    }
    return result
}

const CalificationInput = ({ calificationEvent, maxScore }) => {
    const [score, setScore] = useState(0)
    const values = getArrayFromInt(5) 

    const handleClick = (value) => () => {
        calificationEvent(value)
        setScore(value)
    }

    return (
        <div className="calification-input">
            {
                values.map(value => (
                    <div key={value} className="c-i-input" onClick={handleClick(value+1)}>
                        <Star color={(score > value) ? "#F4D03F" : "#BDC3C7"} height={"40px"} width={"40px"} />
                    </div>
                ))
            }
        </div>
    )
}

export default CalificationInput