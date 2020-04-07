import React, { useEffect, useState } from 'react';

//Components
import ReservationDetailComponent from '../../components/ReservationDetail';

const ReservationDetailModal = ({ isOpen, reservationData, onClose}) => {
  const handleOnSubmit = (objReservationData) => {
    ///Update reservation
    return console.log({ RESERVATION_SUBMIT: objReservationData});
  };

  return (
    <ReservationDetailComponent  reservationData={reservationData} onSubmit={handleOnSubmit} onClose={onClose}/>
  )
};

export default ReservationDetailModal;