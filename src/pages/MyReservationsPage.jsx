import React, { useState, useEffect } from 'react'

import { useHistory } from "react-router-dom"
import sweetalert from 'sweetalert'
import firebaseContext from "../hooks/firebaseContext"

import MyReservations from '../containers/MyReservations'
import LayoutType2 from '../components/LayoutType2';
import Navigationbar from "../containers/NavigationBar"
import Footer from "../containers/Footer"
import { arrayFirebaseParser } from "../utils/index"





const MyReservationsPage = ({ firebaseDatabase, firebaseAppAuth, userSession }) => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpass, setRepeatpass] = useState("");
    const history = useHistory();


    const [ReservationsList, setReservationsList] = useState([]);


    const getUserReservations = () => {
        console.log(userSession.uid)
        firebaseDatabase.ref("/reservations/").orderByChild("user_uid").equalTo(userSession.uid).once("value")
            .then(snapShot => {
                    const val = snapShot.val()
                    const dataParsed = arrayFirebaseParser(val)
                    setReservationsList(dataParsed)
                    
                })
                .catch(e => {
                    console.error(e)
                })
        }

        useEffect(() => {
            getUserReservations()
        }, [])
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