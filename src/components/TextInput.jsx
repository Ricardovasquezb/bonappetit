import React from 'react'
import "../assets/css/TextInput.css"

const TextInput = props => {

    const password =  props.password? "password":"text"
    return(
        <div className="text-input" >
            <span>{props.label}</span>
            <input type={password} value={props.value} onChange={props.change} />
        </div>
    )
}

export default TextInput