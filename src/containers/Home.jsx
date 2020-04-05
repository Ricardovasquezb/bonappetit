import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import "../assets/css/home.css"
import CarouselView from '../components/CarouselView'
import CardView from '../components/CardView'
import LayoutType1 from '../components/LayoutType1'

const Home = props =>{
    
    const [Username, setUserName] = useState("Welcome to the Home!");

    const handleUserName = e => {
        setUserName(e.target.value);
    }

    var Slider_Source = [
        {
            'src': 'http://www.singlecolorimage.com/get/33fd8f/200x50',
            'label': 'Bienvenido a Bon APPetit',
            'description': 'Para realizar una reservacion seleccionesun restaurant'
        },
        {
            'src': 'http://www.singlecolorimage.com/get/ff85a9/200x50',
            'label': 'Te gustan las ofertas?',
            'description': 'Bon APPetit te permite visualizar las ofertas de un restaurante y reservar para una de estas'
        },
        {
            'src': 'http://www.singlecolorimage.com/get/41427a/200x50',
            'label': '¡Estés donde estés!',
            'description': 'Te ofrecemos la posibilidad de llevar a cabo tus reservaciones para el restaurant'
        }
    ];

    const cards_values = [
        {
            'src': 'https://images2.listindiario.com/image/article/339/680x460/0/D4D01D5D-11C3-4153-A15F-74095C9212E1.jpeg',
            'color': 'Dark',
            'title': 'Casa Avila',
            'href' : 'login',
            'ButtonLabel': 'Reservar',
        },
        {
            'src': 'https://restaurante.com.do/wp-content/uploads/2019/01/centralrD.jpg',
            'color': 'Dark',
            'title': 'Central Gastronomica',
            'content': '',
            'ButtonLabel': 'Reservar',
        },
        {
            'src': 'https://megusta.do/storage/32000/8228/1811d7aee9d79e93dba476897c38b2cb.jpg',
            'color': 'Dark',
            'title': 'Borbone',
            'ButtonLabel': 'Reservar'
        },
        {
            'src': 'https://do.ambafrance.org/IMG/arton1387.jpg?1489005601',
            'color': 'Dark',
            'title': 'Meson de la cava',
            'ButtonLabel': 'Reservar'
        },
        {
            'src': 'data:image/png;base64,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',
            'color': 'Dark',
            'title': 'La Locanda',
            'href' : 'login',
            'ButtonLabel': 'Reservar',
        },
        {
            'src': 'https://www.chtmagazine.com/wp-content/uploads/2019/01/sabor.png',
            'color': 'Dark',
            'title': 'Del Mar a la mesa',
            'ButtonLabel': 'Reservar',
        },
        {
            'src': 'https://www.revistamercado.do/wp-content/uploads/2019/05/shurestoooo_11721240_20190531155019.jpg',
            'color': 'Dark',
            'title': 'Ratatouille',
            'ButtonLabel': 'Reservar'
        },
        {
            'src': 'https://hoy.com.do/wp-content/uploads/2017/07/21_07_2017-HOY_VIERNES_210717_-%C2%A1Vivir1-C-653x450.jpg',
            'color': 'Dark',
            'title': 'Meson del Iberia',
            'ButtonLabel': 'Reservar'
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