import React from 'react'
import '../assets/css/image.css'

const Image = props => {
    return(
        <img className={props.className} alt={props.alt} src={props.src}/>
    )
}

export default Image