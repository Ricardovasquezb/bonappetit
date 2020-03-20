import React from 'react'
import Image from '../components/Image'
import logo from "../assets/img/Logo_Fondo_Blanco.png"
import '../assets/css/image.css'

const LayoutRestaurant = props => {
    return(
        <div>
            <Image className='image'>
                src={logo}
            </Image>
        </div>
    );
}

export default LayoutRestaurant;