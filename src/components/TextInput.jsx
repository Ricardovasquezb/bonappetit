import React from 'react'
import "../assets/css/TextInput.css"

const TextInput = props => {
    return(
        <div className="text-input" >
            <span>{props.label}</span>
            <input type="text" value={props.value} onChange={props.change} />
        </div>
    )
}

export default TextInput