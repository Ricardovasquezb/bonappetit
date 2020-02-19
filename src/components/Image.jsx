import React from 'react'
import '../assets/css/image.css'

const Image = props => {
    return(
        <img className='image' alt='' src={props.src}/>
    )
}

export default Image