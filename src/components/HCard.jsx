import React from 'react'
import '../assets/css/hcard.css'

const HCard = props => {
    return(
        <div className='hcard-format'>
            {props.children}
        </div>
    )
}

export default HCard