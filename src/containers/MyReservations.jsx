import React from 'react'
import '../assets/css/my-reservations.css'
import Lodash from 'lodash';

import ReservationCard from '../components/ReservationCard'


const MyReservations = ({ isLoading, reservationsList, onClick}) =>{
    return(

        <div className='my-reservations'>
            <h2>MIS RESERVACIONES</h2>
            <div className='cards'>
          {Lodash.isEmpty(reservationsList) ? <p> no hay na</p> : <ReservationCard
            dataList={reservationsList}
            isLoading={isLoading}
            onClick={onClick}
          />         } 
            </div>
        </div>
    );
}


export default MyReservations;