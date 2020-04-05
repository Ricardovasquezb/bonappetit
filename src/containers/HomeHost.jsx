import React from 'react';
import '../assets/css/home-host.css';

import DashboardBox from '../components/DashboardBox'
import TableView from '../components/TableView'




const HomeHost = props =>{

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
        }
    ];
    
    const TableValues = [
        {
            'img': 'https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png',
            'Name' : 'Josias R.',
            'LastName' : 'Carmona',
            'TableNumber' : '4',
            'hour': 'Tarde'
        },
        {
            'img': 'https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png',
            'Name' : 'John',
            'LastName' : 'Doe',
            'TableNumber' : '4',
            'hour': 'Noche'
        },
        {
            'img': 'https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png',
            'Name' : 'Ricardo',
            'LastName' : 'Vasquez',
            'TableNumber' : '2',
            'hour': 'Tarde'
        },
        {
            'img': 'https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png',
            'Name' : 'Edisson',
            'LastName' : 'Mata',
            'TableNumber' : '2',
            'hour': 'Noche'
        }
    ];
    
    return(
        <div className='home-host'>            
            <DashboardBox/>
            <DashboardBox/>
            <DashboardBox/>
            <DashboardBox/>
            <TableView titles={TableTitle} values={TableValues}/>
        </div>
    );
}

export default HomeHost;