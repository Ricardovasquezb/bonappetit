import React from 'react';
import '../assets/css/about-us.css'
import Logo from '../assets/img/Logo_Fondo_Blanco.png'

import Slider from '../components/CarouselView'
import LayoutType1 from '../components/LayoutType1'
import StaticCardview from '../components/StaticCardview'
import Image from '../components/Image'

const AboutUs = props => {

    var DataSlider = [
        {
            'src': 'http://www.singlecolorimage.com/get/33fd8f/1420x400',
            'label': '¿Qué es Bon APPetit?',
            'description': 'Es una aplicación orientada a la automatización y eficientización'+
            ' del proceso de reservación en locales gastronómicos, a través de una plataforma web'
        },
        {
            'src': 'http://www.singlecolorimage.com/get/ff85a9/1420x400',
            'label': '¿Qué puedes hacer?',
            'description': 'Bon APPetit te permite'+
            ' llevar a cabo el proceso de selección y seguimiento de tus reservaciones'
        },
        {
            'src': 'http://www.singlecolorimage.com/get/6ea1d2/1420x400',
            'label': '¡Estés donde estés!',
            'description': 'Te ofrecemos la posibilidad de llevar a cabo tus reservaciones para el restaurant'+
            ' de tu preferencia estes donde estes'
        }
    ];

    var Team = [
        {
            'color': 'Dark',
            'src' : 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png',
            'title': 'Ricardo Vasquez',
            'subtitle': 'Project Manager',
            'button_variant' : 'Dark'

        },
        {
            'color': 'Dark',
            'src' : 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png',
            'title': 'Josías Carmona',
            'subtitle': 'Developer',
            'button_variant' : 'Dark'
        },
        {
            'color': 'Dark',
            'src' : 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png',
            'title': 'Xavier Rosario',
            'subtitle': 'Developer',
            'button_variant' : 'Dark'
        },
        {
            'color': 'Dark',
            'src' : 'https://www.shareicon.net/data/512x512/2016/07/26/802031_user_512x512.png',
            'title': 'Perla Flete',
            'subtitle': 'Quality A.',
            'button_variant' : 'Dark'

        },
        {
            'color': 'Dark',
            'src' : 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png',
            'title': 'Yohan Reyes',
            'subtitle': 'Tester',
            'button_variant' : 'Dark'
        },
        {
            'color': 'Dark',
            'src' : 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png',
            'title': 'Juan Carlos Peña',
            'subtitle': 'Tester',
            'button_variant' : 'Dark'
        }
    ];
    return(
        <div className='about-us'>
            <LayoutType1 
                boxOne={<Image src={Logo}/>}
                boxTwo={
                <div>
                    <h2>¿Qué es Bon APPetit?</h2>
                    <p><strong>Bon APPetit</strong>, es una aplicación orientada a la automatización y eficientización  
                        del proceso de reservación en locales gastronómicos, a través de una <strong>plataforma web</strong>, 
                        que permite llevar a cabo el proceso de selección, reservación y seguimiento del mismo. 
                        Estas reservaciones se realizan a través del usuario, mediante un perfil en la aplicación.</p>
                </div>}
            />
            <Slider source={DataSlider}/>
            <div>
               <p>

                </p> 
            </div>
            <div className='team'>
                <h2>El BonAPPeTeam</h2>
                <StaticCardview values={Team}/>
            </div>
        </div>
    );
}

export default AboutUs;