import React, { useState, useEffect } from 'react'
import { normalize, schema } from 'normalizr';
import Lodash from 'lodash';

import { useHistory } from "react-router-dom"
import sweetalert from 'sweetalert'
import firebaseContext from "../hooks/firebaseContext"

import MyReservations from '../containers/MyReservations'
import LayoutType2 from '../components/LayoutType2';
import Navigationbar from "../containers/NavigationBar"
import Footer from "../containers/Footer"
import { arrayFirebaseParser } from "../utils/index"
import Moment from 'moment';


import ReservationDetailModal from './ReservationDetailModal';

const normalizeRestaurantData = (restaurants) => {
  const restaurantsSchema = new schema.Entity('restaurants', {}, { idAttribute: "uid"});
  const listRestaurants = new schema.Array(restaurantsSchema);
  return normalize(restaurants, listRestaurants)
};

const MyReservationsPage = ({ firebaseDatabase, firebaseAppAuth, userSession }) => {
    const [reservationsList, setReservationsList] = useState([]);
    const [restaurantsNormalize, setRestaurantsNormalize ] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReservation, setSelectedReservation] = useState({});

    const userUid =localStorage.getItem("user");
 
  const toggleModal = () => setIsModalOpen(!isModalOpen);

    const getUserReservations = async () => {
      const myReservationsSnapShot = await firebaseDatabase.ref("/reservations/").orderByChild("user_uid").equalTo(userUid).once("value");
      const objReservations = myReservationsSnapShot.val();
      console.log(objReservations, Object.keys(objReservations))
      // const filteredObjReservations = Lodash.filter(objReservations, objReservation => Moment(objReservation.date).before(Moment()))
      const restaurantLookup = Lodash.get(restaurantsNormalize, ['entities' ,'restaurants'], null);
      if (restaurantLookup && !Lodash.isNil(objReservations)){
        const myReservations = Object.keys(objReservations).map(strKey => {  
          console.log(objReservations[strKey].date, Moment())
          console.log(Moment(objReservations[strKey].date,"D/M/YYYY").isSameOrAfter(Moment(),'D'))
          if(Moment(objReservations[strKey].date,"D/M/YYYY").isSameOrAfter(Moment(),'D')){
            return {
              ...objReservations[strKey],
              uid: strKey,
              restaurant: restaurantLookup[objReservations[strKey].restaurant_id]
            }
          }

             
          
        });
        // const filteredReservations = Lodash.filter(myReservations, objReservation => Moment(objReservation.date).isBefore(Moment()))
        console.log(myReservations)
        return setReservationsList(myReservations);
      }

      return null;
    }

    const getAllRestaurantData = () => {
      setIsLoading(true)
     return firebaseDatabase.ref("/restaurants").once("value")
        .then(snapShot => {
          const val = snapShot.val();
          const dataParsed = arrayFirebaseParser(val);
          setIsLoading(false)

          return setRestaurantsNormalize(normalizeRestaurantData(dataParsed));
        })
        .catch(e => {
          console.error(e)
          setIsLoading(false)

        })
    };

  useEffect(() => {
    getAllRestaurantData();
  }, []);

  useEffect(() => {
    getUserReservations();
  }, [restaurantsNormalize]);
  
  const { push: toLocation } = useHistory()
  const toDetailsReservation = (reservationId) => () => {
   return toLocation("/reservation-detail/" + reservationId)
  };

  const handleOnReservationCardClick = (objReservation) => {
     setSelectedReservation(objReservation);
    return toggleModal();
  };

    return (
        <div>
            <Navigationbar/>

          <LayoutType2
            Box={<MyReservations isLoading={isLoading} reservationsList={reservationsList} onClick={handleOnReservationCardClick}/>}
          />
        {isModalOpen ? <ReservationDetailModal reservationData={selectedReservation} onClose={toggleModal}/> : null}
        
                    
            <Footer/>
        </div>
    );
}

export default MyReservationsPage