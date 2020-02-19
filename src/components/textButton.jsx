import React from 'react'
import '../assets/css/text-button.css'

const TextButton = props => {
    return(
       <button className = 'text-button'>
           {props.children}
       </button>
    )
}

export default TextButton
