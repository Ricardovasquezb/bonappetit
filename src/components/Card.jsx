import React from 'react'
import '../assets/css/card.css'

const Card = props => {

    const mode = props.mode;
    return(
        <div className={`card-format ${mode}`}>
            {props.children}
        </div>
    )
}

export default Card