import React, { useEffect, useState, useMemo } from 'react';
import '../assets/css/home-host.css';

import DashboardBox from '../components/DashboardBox'
import TableView from '../components/TableView'
import Settings from '../containers/SettingsHost'
import { arrayFirebaseParser, averageByKyStrict, dateParser, getFirstQuantity, uniqueItemsFromKey } from '../utils';
import * as firebase from 'firebase/app'
import 'firebase/auth';

const getAllPendingReservations = async (restaurantId, firebaseDatabase) => {
    const ref = firebaseDatabase.ref("/reservations/")
    const snapShot =  await ref.orderByChild("pending").equalTo(true).once("value")
    return snapShot.val()
}



const HomeAdmin = ({ firebaseDatabase, user }) =>{
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
        }
    ];
    
    const restaurantDataTest = {
        restaurant_id: "prueba1"
    }
    
    useEffect(() => {
        getAllPendingReservations(Object.keys(user)[0], firebase.database())
            .then(result => {
                const results = arrayFirebaseParser(result)
                setReservations(results)
            })
            .catch(err => {
            })
            

    }, [])
    
    const toMemoRaiting = () => averageByKyStrict(reservations, "punctuation")
    const toMemoFristThree = () => getFirstQuantity(3, reservations)
    const toMemoClientsId = () => uniqueItemsFromKey(reservations, "user_uid")

    const rating = useMemo(toMemoRaiting, [reservations])
    const threeFirst = useMemo(toMemoFristThree, [reservations])
    const clientsId = useMemo(toMemoClientsId, [reservations])

   

    return(
        <div className='home-host'>
            <h2>{user[Object.keys(user)[0]].name}</h2>            
            <h3>Lista de reservas del dia</h3>
            <TableView titles={TableTitle} values={TableValues}/>
            <h3>Estadisticas</h3>
            <DashboardBox source = {DashBoxes}/>
        </div>
    );
}

export default HomeAdmin;