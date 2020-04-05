import React, { useState, useEffect } from 'react'
import Button from '../components/normalButton'
import '../assets/css/new-reservation.css'
import TextInput from "../components/TextInput"
import Card from '../components/Card'
import { useParams, Redirect } from "react-router-dom"
import sweetalert from 'sweetalert'
import firebaseContext from "../hooks/firebaseContext"
import NewReservation from '../containers/NewReservation'
import LayoutType1 from '../components/LayoutType1';
import LayoutRestaurant from '../containers/LayoutRestaurant'
import LayoutTest from '../assets/img/LayoutTest.png'
import Image from "../components/Image";
import Navigationbar from "../containers/NavigationBar"
import Footer from "../containers/Footer"

const NewReservationsPage = ({ firebaseDatabase, firebaseAppAuth }) => {
    const { restaurantId } = useParams();
    const [tables, setTables] = useState([]);
    const userUid = firebaseAppAuth.currentUser ? firebaseAppAuth.currentUser.uid : null; 

    console.log(userUid); 

    useEffect(() => {
        firebaseDatabase.ref("/reservations/").push({
            
        })
    }, [])

    if (!restaurantId) return <Redirect to="/home" />
    return (
        <div className="new-reservation">
            <Navigationbar/>
            <h3>Nombre del Restaurant</h3>
            <LayoutType1 
                boxOne={ <Image src={LayoutTest}/> }
                boxTwo={<NewReservation/>} 
            />
            <Footer/>
        </div>
    );
}

export default NewReservationsPage