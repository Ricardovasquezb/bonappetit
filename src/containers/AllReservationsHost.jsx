import React, {useState} from 'react'

import '../assets/css/all-reservations-host.css'

import TableView from '../components/TableView'
import DateTimePicker from '../components/DateTimePicker'

const AllReservations = props =>{

    const [fecha, setFecha] = useState("");

    const handleFecha = e => {
        setFecha(e.target.value);
    }

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
    
    var TableValues = [
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

    return(
        <div className='all-reservations-host'>
            <h2>RESERVACIONES</h2>
            <h4>Seleccione una fecha para filtrar</h4>
            <div className="picker">
                <DateTimePicker
                    onChange={handleFecha}
                />
            </div>
            
            <TableView titles={TableTitle} values={TableValues}/>
        </div>
    );
}

export default AllReservations