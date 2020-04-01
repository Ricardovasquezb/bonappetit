import React from 'react'
import Image from '../components/Image'
import '../assets/css/image.css'

const LayoutRestaurant = props => {
    return(
        <div>
            <Image className='image'>
                src={props.layout}
            </Image>
        </div>
    );
}

export default LayoutRestaurant;