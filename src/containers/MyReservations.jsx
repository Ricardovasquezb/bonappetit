import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import firebaseContext from "../hooks/firebaseContext"
import sweetalert from 'sweetalert'

import '../assets/css/my-reservations.css'

import Button from '../components/normalButton'
import CardView from '../components/CardView'

const MyReservations = props =>{

    var reservations = [
       
        {
            'color': 'Light',
            'title': 'Meson del Iberia',
            'subtitle': '30/3/2020',
            'content': 'Tarde de te',
            'ButtonLabel': 'Modificar',
        },{
            'color': 'Light',
            'title': 'Meson del Iberia',
            'subtitle': '31/01/2020',
            'content': 'Noche de parejas',
            'ButtonLabel': 'Modificar',
        },{
            'color': 'Dark',
            'title': 'Meson de la cava',
            'subtitle': '17/4/2020',
            'content': 'Tarde ejecutiva',
            'ButtonLabel': 'Modificar',
        },{
            'color': 'Dark',
            'title': 'Scherezade',
            'subtitle': '03/04/2020',
            'content': 'Cena de gala',
            'ButtonLabel': 'Modificar'
        },{
            'color': 'Dark',
            'title': 'Hotel Transilvania',
            'subtitle': '13/4/2020',
            'content': 'Noche Mexicana',
            'ButtonLabel': 'Modificar'
        },{
            'color': 'Dark',
            'title': 'Meson del Iberia',
            'subtitle': '17/4/2020',
            'content': 'Tarde de te',
            'ButtonLabel': 'Modificar'
        },{
            'color': 'Dark',
            'title': 'Food Court',
            'subtitle': '16/5/2020',
            'content': 'Reunion de los 70´s' ,
            'ButtonLabel': 'Modificar'
        },{
            'color': 'Dark',
            'title': 'Hotel Santo Domingo',
            'subtitle': '17/5/2020',
            'content': 'Noche Hispaniola',
            'ButtonLabel': 'Modificar'
        },
       
    ];
    return(
        <div className='my-reservations'>
            <h3>Mis reservaciones</h3>
            <div className='cards'>
                <CardView values={reservations} onClick={console.log('clicked')}/>
            </div>
        </div>
    );
}


export default MyReservations;