import React, { useState, useEffect } from 'react'
import Button from '../components/normalButton'
import '../assets/css/new-reservation.css'
import TextInput from "../components/TextInput"
import Card from '../components/Card'
import { useParams, Redirect } from "react-router-dom"
import NewReservation from '../containers/NewReservation'
import LayoutType1 from '../components/LayoutType1';
import LayoutRestaurant from '../containers/LayoutRestaurant'
import LayoutTest from '../assets/img/LayoutTest.png'
import Image from "../components/Image";
import Navigationbar from "../containers/NavigationBar"
import Footer from "../containers/Footer"
import { arrayFirebaseParser } from "../utils/index"

const NewReservationsPage = ({ firebaseDatabase, firebaseAppAuth, userSession }) => {
    const { restaurantId } = useParams();

    const [tableList, setTableList] = useState([]);

    const getTables = () => {
        firebaseDatabase.ref(`/restaurant/${restaurantId}/tables`).once("value")
            .then(snapShot => {
                const val = snapShot.val()
                const dataParsed = arrayFirebaseParser(val)
                setTableList(dataParsed)
            })
            .catch(e => {
                console.error(e)
            })
    }
    const createReservation = ({ schedule, table, date }) => {
        const toPush = {
            user_uid: userSession.uid,
            restaurant_id: restaurantId,
            schedule,
            table,
            date
        }
        return firebaseDatabase.ref("/reservations/").push(toPush)
    }
    const doneHanler = (data) => {
        createReservation(data)
            .then(() => {
                console.log("Se guardo")
            })
            .catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        getTables()
    }, [])

    if (!restaurantId) return <Redirect to="/home" />
    return (
        <div className="new-reservation">
            <Navigationbar/>
            <h3>Nombre del Restaurant</h3>
            <LayoutType1 
                boxOne={ <Image src={LayoutTest}/> }
                boxTwo={
                    <NewReservation
                        listData={tableList}
                        done={doneHanler}
                    />
                } 
            />
            <Footer/>
        </div>
    );
}

export default NewReservationsPage