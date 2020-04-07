import React, { useState, useEffect } from 'react'

import { useHistory } from "react-router-dom"
import sweetalert from 'sweetalert'
import firebaseContext from "../hooks/firebaseContext"

import MyReservations from '../containers/MyReservations'
import LayoutType2 from '../components/LayoutType2';
import Navigationbar from "../containers/NavigationBar"
import Footer from "../containers/Footer"
import { arrayFirebaseParser } from "../utils/index"

const MyReservationsPage = ({ firebaseDatabase, firebaseAppAuth, userSession, isLoading }) => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpass, setRepeatpass] = useState("");
    const history = useHistory();

    const [ReservationsList, setReservationsList] = useState([]);

const userUid =localStorage.getItem("user")
    const getUserReservations = async () => {

        try {
           // if (isLoading) return null
            let reservationsWithData = []
            const reservationSnapShot = await firebaseDatabase.ref("/reservations/").orderByChild("user_uid").equalTo(userUid).once("value")
            const reservations = arrayFirebaseParser(reservationSnapShot.val())

            for (let reservation of reservations) {
                const restaurantSnapShot = await firebaseDatabase.ref(`/restaurant/${reservation.restaurant_id}`).once("value")
                const restaurant = restaurantSnapShot.val()
                reservationsWithData.push({
                    ...reservation,
                    restaurant_img: restaurant.profileurl,
                    restaurant_name: restaurant.name
                })
            }

            return setReservationsList(reservationsWithData)
        } catch(e) {
            alert("exploto aquí")
            console.log(e)
            return []
        }
    }
        
    useEffect(() => {
        getUserReservations()
    }, [])
console.log({ReservationsList})
    return (
        <div>
            <Navigationbar/>
            
                        <LayoutType2
                            Box={ <MyReservations
                                reservationsList = {ReservationsList}
                            /> }
                        />
                    
            <Footer/>
        </div>
    );
}

export default MyReservationsPage