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
      reservationId: `${moment(objReservationData.reservationDate,'D-M-YYYY').format('D/M/YYYY')}.${objReservationData.reservationTable}.${objReservationData.reservationSchedule}.${reservationData.restaurant_id}`

    }

    
    
    return firebase.database().ref(`/reservations/${reservationData.uid}`).update(newData)
    .then(()=>{
      // window.location.reload();
    });
  };

  const deleteReservation = ()=>{
    const reservation_uid = reservationData.uid;

    return firebase.database().ref(`reservations/${reservation_uid}`).remove()
      .then(()=>{
        window.location.reload();
      })
    
    
    
  };
  

  return (
    <ReservationDetailComponent  reservationData={reservationData} onSubmit={handleOnSubmit} onClose={onClose} onDelete= {deleteReservation}/>
  )
};

export default ReservationDetailModal;