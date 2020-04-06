import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import "../assets/css/home.css"
import CarouselView from '../components/CarouselView'
import CardView from '../components/CardView'
import LayoutType1 from '../components/LayoutType1'

import image from '../assets/img/Logo_Fondo_Blanco.png'

import firebaseContext from "../hooks/firebaseContext"

const Consumer = firebaseContext.Consumer


const Home = props =>{
    
    var User = props.user;
    
    const [Username, setUserName] = useState("Welcome to the Home!");

    const handleUserName = e => {
        setUserName(e.target.value);
    }

    var Slider_Source = [
        {
            'src': 'http://www.singlecolorimage.com/get/33fd8f/200x50',
            'label': `${User.name}, esto es Bon APPetit`,
            'description': 'Para realizar una reservacion selecciones un restaurant'
        },
        {
            'src': 'http://www.singlecolorimage.com/get/ff85a9/200x50',
            'label': '¿Te gustan las ofertas?',
            'description': 'Bon APPetit te permite visualizar las ofertas de un restaurante y reservar para una de estas'
        },
        {
            'src': 'http://www.singlecolorimage.com/get/6ea1d2/200x50',
            'label': '¡Estés donde estés!',
            'description': 'Te ofrecemos la posibilidad de llevar a cabo tus reservaciones para el restaurant'
        }
    ];

    return(
        <div className='home'>

            <div className='home-twocol'>
                <CarouselView
                    source={Slider_Source}
                />
                {/* <div className='home-col2'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat atque, consequuntur necessitatibus repellat in laborum minima molestiae porro quisquam voluptates praesentium. Nesciunt dolorum dolor autem est? Quas quaerat inventore nam!</p>
                </div> */}
            </div>
            <CardView values={cards_values}/>
        
        </div>
    );
}

export default Home;