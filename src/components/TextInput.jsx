import React from 'react'
import "../assets/css/TextInput.css"

const TextInput = props => {
    const mode = props.darkmode? "text-alternative":"text-input";

    let type="text";  
    if (props.password) type = "password"
    if  (props.email) type = "email"

    return(
        <div className={`text-input ${mode}`} >
            <span>{props.label}</span>
            <input  required type={type} value={props.value} onChange={props.change} />
        </div>
    )
}

export default TextInput