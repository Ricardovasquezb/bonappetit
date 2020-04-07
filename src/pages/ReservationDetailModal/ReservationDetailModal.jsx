import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase/app'
import 'firebase/database'
import moment from 'moment';



//Components
import ReservationDetailComponent from '../../components/ReservationDetail';

const ReservationDetailModal = ({ isOpen, reservationData, onClose}) => {
  const handleOnSubmit = (objReservationData) => {
    ///Update reservation

    const newData =  {
      date: moment(objReservationData.reservationDate,'D-M-YYYY').format('D/M/YYYY'),
      schedule: objReservationData.reservationSchedule,
      table: objReservationData.reservationTable,
      reservationId: `${moment(objReservationData.reservationDate,'D-M-YYYY').format('D/M/YYYY')}.${objReservationData.reservationTable}.${objReservationData.reservationSchedule}.${objReservationData.restaurantId}`,
      user_uid: reservationData.user_uid,
      restaurant_id: reservationData.restaurant_id,
    }
    
    
    return firebase.database().ref(`/reservations/${reservationData.uid}`).set(newData)
    .then(()=>{
      window.location.reload();
    });
  };

  const deleteReservation = ()=>{
    const restaurant_uid = reservationData.uid

    return firebase.database().ref(`reservations/${restaurant_uid}`).remove()
      .then(()=>{
        window.location.reload();
      })
    
    
    
  };
  

  return (
    <ReservationDetailComponent  reservationData={reservationData} onSubmit={handleOnSubmit} onClose={onClose} onDelete= {deleteReservation}/>
  )
};

export default ReservationDetailModal;