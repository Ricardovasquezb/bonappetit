import React from 'react';
import '../assets/css/home-host.css';

import DashboardBox from '../components/DashboardBox'
import TableView from '../components/TableView'
import Settings from '../containers/SettingsHost'




const HomeHost = props =>{

    var User = props.user;
    
    const TableTitle = [
        {
            'title': 'No.'
        },
        {
            'title': 'Nombre'
        },
        {
            'title': 'Mesa'
        },
        {
            'title': 'Horario'
        },
        {
            'title': 'Código'
        }
    ];
    const TableValues = [
        {
            'img': 'https://image.freepik.com/foto-gratis/personas-que-sonrie-alegre-hombres-guapos_1187-6057.jpg',
            'Name' : 'Josias R.',
            'LastName' : 'Carmona',
            'TableNumber' : '4',
            'hour': 'Tarde',
            'code': '124 743 284'
        },
        {
            'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZN5i6aLO9vG4-gvTMO3xdEv99TY28cWYySlkFBqSAGVu4LV66&usqp=CAU',
            'Name' : 'Ricardo',
            'LastName' : 'Vasquez',
            'TableNumber' : '2',
            'hour': 'Tarde',
            'code': '934 382 145'
        },
        {
            'img': 'https://lgfstatic.com/2015/conversions/virtudes-de-una-persona-large.jpg',
            'Name' : 'Edisson',
            'LastName' : 'Mata',
            'TableNumber' : '2',
            'hour': 'Noche',
            'code': '320 634 123'
        }
    ];
    const DashBoxes = [
        {
            'value': 3,
            'header': 'Reservas del dia',
            'icon': 'calendar-check',
        },
        {
            'value': 4.5,
            'header': 'Rating',
            'icon': 'star-half-alt',
            'iconFooter': 'angle-up',
            'footer': 'Promedio'
        },
        {
            'value': 125,
            'header': 'Reservaciones en el mes',
            'icon': 'chart-line',
            'iconFooter': 'angle-up',
            'footer': 'Hasta la fecha'
        },
        {
            'value': 440,
            'header': 'Clientes',
            'icon': 'users',
            'iconFooter': 'angle-up',
            'footer': 'Totales'
        }
    ]

    
    return(
        <div className='home-host'>
            <h2>{User.name.toUpperCase()}</h2>            
            <h3>Lista de reservas del dia</h3>
            <TableView titles={TableTitle} values={TableValues}/>
            <h3>Estadisticas</h3>
            <DashboardBox source = {DashBoxes}/>
        </div>
    );
}

export default HomeHost;