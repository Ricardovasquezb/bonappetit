import React from "react";
import "../assets/css/my-reservations.css";
import Lodash from "lodash";

import ReservationCard from "../components/ReservationCard";

const MyReservations = ({ isLoading, reservationsList, onClick }) => {
  const renderContent = () => {
    if (isLoading) {
      return <ReservationCard isLoading={isLoading} />;
    }

    if (Lodash.isEmpty(reservationsList)) {
      return <h5>Aun no haz hecho ninguna reserva</h5>;
    }

    return (
      <ReservationCard
        dataList={reservationsList}
        isLoading={isLoading}
        onClick={onClick}
      />
    );
  };

  return (
    <div className="my-reservations">
      <h2>MIS RESERVACIONES</h2>
      <div className="cards">{renderContent()}</div>
    </div>
  );
};

export default MyReservations;
