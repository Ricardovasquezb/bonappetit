import React from 'react'
import "../assets/css/TextInput.css"
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const TextInput = props => {
   
    const mode = props.darkmode? "text-alternative":"text-input";
    const icon_mode = props.icon_mode? "icon": "non-icon";

    let type="text";  
    if (props.password) type = "password"
    if  (props.email) type = "email"

    return(
        <div className={`text-input ${mode}`} >
            <span>{props.label}</span>
            <div className='div-input'>
                <input className={`input-${icon_mode}`}  required type={type} value={props.value} onChange={props.change} />
                <InputGroup.Text id="inputGroupPrepend" className={icon_mode}>{props.icon}</InputGroup.Text>
            </div>
        </div>
    )
}

export default TextInput