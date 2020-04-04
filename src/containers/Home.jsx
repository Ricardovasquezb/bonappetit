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
    
    const [Username, setUserName] = useState("Welcome to the Home!");

    const handleUserName = e => {
        setUserName(e.target.value);
    }

    var Slider_Source = [
        {
            'src': 'http://www.singlecolorimage.com/get/33fd8f/400x250',
            'label': 'Bienvenido a Bon APPetit',
            'description': 'Para realizar una reservacion seleccionesun restaurant'
        },
        {
            'src': 'http://www.singlecolorimage.com/get/ff85a9/400x250',
            'label': 'Te gustan las ofertas?',
            'description': 'Bon APPetit te permite visualizar las ofertas de un restaurante y reservar para una de estas'
        },
        {
            'src': 'http://www.singlecolorimage.com/get/41427a/400x250',
            'label': '¡Estés donde estés!',
            'description': 'Te ofrecemos la posibilidad de llevar a cabo tus reservaciones para el restaurant'
        }
    ];
    const cards_values = [
        {
            'src': 'https://images2.listindiario.com/image/article/339/680x460/0/D4D01D5D-11C3-4153-A15F-74095C9212E1.jpeg',
            'color': 'Dark',
            'title': 'Casa Avila',
            'content': 'Viernes Familiar',
            'href' : 'login',
            'ButtonLabel': 'Reservar',
        },
        {
            'src': 'https://www.chtmagazine.com/wp-content/uploads/2019/01/sabor.png',
            'color': 'Dark',
            'title': 'Del Mar a la mesa',
            'content': 'Tarde de parejas',
            'ButtonLabel': 'Reservar',
        },
        {
            'src': 'https://megusta.do/storage/32000/8228/1811d7aee9d79e93dba476897c38b2cb.jpg',
            'color': 'Dark',
            'title': 'Borbone',
            'content': 'Comida Italiana',
            'ButtonLabel': 'Reservar'
        },
        {
            'src': 'https://hoy.com.do/wp-content/uploads/2017/07/21_07_2017-HOY_VIERNES_210717_-%C2%A1Vivir1-C-653x450.jpg',
            'color': 'Dark',
            'title': 'Meson del Iberia',
            'content': 'Noche de parejas',
            'ButtonLabel': 'Reservar'
        },
        {
            'src': 'https://images2.listindiario.com/image/article/339/680x460/0/D4D01D5D-11C3-4153-A15F-74095C9212E1.jpeg',
            'color': 'Dark',
            'title': 'Casa Avila',
            'content': 'Viernes Familiar',
            'href' : 'login',
            'ButtonLabel': 'Reservar',
        },
        {
            'src': 'https://www.chtmagazine.com/wp-content/uploads/2019/01/sabor.png',
            'color': 'Dark',
            'title': 'Del Mar a la mesa',
            'content': 'Tarde de parejas',
            'ButtonLabel': 'Reservar',
        },
        {
            'src': 'https://megusta.do/storage/32000/8228/1811d7aee9d79e93dba476897c38b2cb.jpg',
            'color': 'Dark',
            'title': 'Borbone',
            'content': 'Comida Italiana',
            'ButtonLabel': 'Reservar'
        },
        {
            'src': 'https://hoy.com.do/wp-content/uploads/2017/07/21_07_2017-HOY_VIERNES_210717_-%C2%A1Vivir1-C-653x450.jpg',
            'color': 'Dark',
            'title': 'Meson del Iberia',
            'content': 'Noche de parejas',
            'ButtonLabel': 'Reservar'
        }
    ];

    return(
        <Consumer>
            {
                ({ firebaseDatabase }) => {
                    return (
                        <div className='home'>
                            <div className='home-twocol'>
                                <CarouselView className='home-col1'
                                    firebaseInstance={firebaseDatabase}
                                    source={Slider_Source}
                                />
                            </div>
                            <CardView 
                                firebaseInstance={firebaseDatabase}
                                values={cards_values}
                            />
                        
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil temporibus nulla voluptate dolor enim, molestiae, atque corporis corrupti ab deleniti voluptatem. Enim numquam, doloremque a vitae hic reiciendis nesciunt!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil temporibus nulla voluptate dolor enim, molestiae, atque corporis corrupti ab deleniti voluptatem. Enim numquam, doloremque a vitae hic reiciendis nesciunt!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil temporibus nulla voluptate dolor enim, molestiae, atque corporis corrupti ab deleniti voluptatem. Enim numquam, doloremque a vitae hic reiciendis nesciunt!
                            </p>
                        
                        </div>
                    )
                }
            }
        </Consumer>
    );
}

export default Home;