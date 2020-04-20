import React, { useEffect, useState, useMemo } from 'react';
import '../assets/css/home-host.css';
import Lodash from 'lodash';

import DashboardBox from '../components/DashboardBox'
import TableView from '../components/TableView'
import Settings from '../containers/SettingsHost'
import { arrayFirebaseParser, averageByKyStrict, dateParser, getFirstQuantity, uniqueItemsFromKey, getReservationTableData } from '../utils';
import * as firebase from 'firebase/app'
import 'firebase/auth';

const getAllReservations = async (restaurantId, firebaseDatabase) => {
    const ref = firebaseDatabase.ref("/reservations/")
    const snapShot =  await ref.orderByChild("restaurant_id").equalTo(restaurantId).once("value")
    console.log(snapShot.val())
    return snapShot.val()
}
const getTodayReservations = (reservations) => {
    return reservations.filter(reservation => {
        return reservation.date === dateParser(new Date())
    })
};
const getThisMonthReservations = (reservations) => {
    return reservations.filter(reservation => reservation.date.substring(3) === dateParser(new Date()).substring(3) )
}



const HomeHost = ({ firebaseDatabase, user }) =>{
    const [reservations, setReservations] = useState([]);


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
        },
        {
            'title': ''
        }
    ];

    
    useEffect(() => {
        getAllReservations(Object.keys(user)[0], firebase.database())
            .then(result => {
                const results = arrayFirebaseParser(result)
                setReservations(results)
            })
            .catch(err => {
            })
            

    }, [])

    // useEffect(() => {
    //     loadReservations(Object.keys(user)[0])
    //   }, [Object.keys(user)[0]])
    
      const refreshData = () => {
        loadReservations(Object.keys(user)[0])
      }
      const loadReservations = (restId) => {
        getAllReservations(restId, firebase.database())
          .then(values => {
           return setReservations(arrayFirebaseParser(values));
          })
          .catch(objError=>console.log({ERROR: objError}));
      }
    const toMemoRaiting = () => averageByKyStrict(reservations, "punctuation")
    const toMemoOnlyToday = () => getTodayReservations(reservations)
    const toMemoOnlyThisMonth = () => getThisMonthReservations(reservations)
    const toMemoFristThree = () => getFirstQuantity(3, reservations)
    const toMemoClientsId = () => uniqueItemsFromKey(reservations, "user_uid")

    const rating = useMemo(toMemoRaiting, [reservations])
    const onlyToday = useMemo(toMemoOnlyToday, [reservations])
    const threeFirst = useMemo(toMemoFristThree, [reservations])
    const onlyThisMonth = useMemo(toMemoOnlyThisMonth, [reservations])
    const clientsId = useMemo(toMemoClientsId, [reservations])

    const DashBoxes = [
        {
            'value': onlyToday.length,
            'header': 'Reservas del dia',
            'icon': 'calendar-check',
        },
        {
            'value': rating,
            'header': 'Rating',
            'icon': 'star-half-alt',
            'iconFooter': 'angle-up',
            'footer': 'Promedio'
        },
        {
            'value': onlyThisMonth.length,
            'header': 'Reservaciones en el mes',
            'icon': 'chart-line',
            'iconFooter': 'angle-up',
            'footer': 'Hasta la fecha'
        },
        {
            'value': clientsId.length,
            'header': 'Clientes',
            'icon': 'users',
            'iconFooter': 'angle-up',
            'footer': 'Totales'
        }
    ]

  

    return(
        <div className='home-host'>
            <h2>{user[Object.keys(user)[0]].name}</h2>            
            <h3>Lista de reservas para hoy</h3>
            <TableView activeEvent={refreshData} titles={TableTitle} values={getReservationTableData(onlyToday)}/>
            <h3>Estadisticas</h3>
            <DashboardBox source = {DashBoxes}/>
        </div>
    );
}

export default HomeHost;