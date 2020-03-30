import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import "../assets/css/home.css"
import CarouselView from '../components/CarouselView'
import CardView from '../components/CardView'
import image from '../assets/img/Logo_Fondo_Blanco.png'

const Home = props =>{
    
    const [Username, setUserName] = useState("Welcome to the Home!");

    const handleUserName = e => {
        setUserName(e.target.value);
    }

    const cards_values = [
        {
            // 'src': {image},
            'color': 'Dark',
            'title': 'Meson de la cava',
            'content': 'Noche de parejas',
            'href' : 'login',
            'link' : 'login',
            'ButtonLabel': 'Reservar'
        },
        {
            // 'src': {image},
            'color': 'Dark',
            'title': 'Meson del Iberia',
            'content': 'Tarde de parejas',
            'ButtonLabel': 'Reservar'
        },
        {
            // 'src': {image},
            'color': 'Dark',
            'title': 'Meson del Iberia',
            'content': 'Tarde de parejas',
            'ButtonLabel': 'Reservar'
        }
    ];
    
    
    return(
        <div className='home'>

            <h1>Welcome to the Home!</h1>
            {/* <CardView src={image} color='Secondary' title='Meson de la cava' content='Noche de parejas' ButtonLabel='Reservar'/> */}
            
            <CardView values={cards_values}/>
           
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil temporibus nulla voluptate dolor enim, molestiae, atque corporis corrupti ab deleniti voluptatem. Enim numquam, doloremque a vitae hic reiciendis nesciunt!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil temporibus nulla voluptate dolor enim, molestiae, atque corporis corrupti ab deleniti voluptatem. Enim numquam, doloremque a vitae hic reiciendis nesciunt!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil temporibus nulla voluptate dolor enim, molestiae, atque corporis corrupti ab deleniti voluptatem. Enim numquam, doloremque a vitae hic reiciendis nesciunt!
            </p>
            
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil temporibus nulla voluptate dolor enim, molestiae, atque corporis corrupti ab deleniti voluptatem. Enim numquam, doloremque a vitae hic reiciendis nesciunt!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil temporibus nulla voluptate dolor enim, molestiae, atque corporis corrupti ab deleniti voluptatem. Enim numquam, doloremque a vitae hic reiciendis nesciunt!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil temporibus nulla voluptate dolor enim, molestiae, atque corporis corrupti ab deleniti voluptatem. Enim numquam, doloremque a vitae hic reiciendis nesciunt!
            </p>
            
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil temporibus nulla voluptate dolor enim, molestiae, atque corporis corrupti ab deleniti voluptatem. Enim numquam, doloremque a vitae hic reiciendis nesciunt!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil temporibus nulla voluptate dolor enim, molestiae, atque corporis corrupti ab deleniti voluptatem. Enim numquam, doloremque a vitae hic reiciendis nesciunt!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil temporibus nulla voluptate dolor enim, molestiae, atque corporis corrupti ab deleniti voluptatem. Enim numquam, doloremque a vitae hic reiciendis nesciunt!
            </p>
        
        </div>
    );
}

export default Home;