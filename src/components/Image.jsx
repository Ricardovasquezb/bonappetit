import React from 'react'
import '../assets/css/image.css'

const Image = props => {
    return(
        <img className={`image ${props.mode}`} 
            alt='' 
            src={props.src}/>
    )
}

export default Image