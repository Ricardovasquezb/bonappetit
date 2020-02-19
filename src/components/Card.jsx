import React from 'react'
import '../assets/css/card.css'

const Card = props => {
    return(
        <div className='card-format'>
            {props.children}
        </div>
    )
}

export default Card