import React from 'react'
import '../assets/css/text.css'

const Text = props => {
    return(
        <text className = "text">
            {props.children}
        </text>
    )
}

export default Text