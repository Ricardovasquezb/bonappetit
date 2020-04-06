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

    const [restaurantName, setrestaurantName] = useState("empty");

    const getrestaurantName = ()=>{
        firebaseDatabase.ref(`/restaurant/${restaurantId}/name`).once("value")
        .then(snapShot=> {
             
            setrestaurantName(snapShot.val())
        })
        .catch(e=>{
            console.error(e)
        })
    }
    getrestaurantName()

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

    const verifyIfExist = async (toEqual) => {
        const snapShot = await firebaseDatabase.ref("/reservations/").orderByChild("reservationId").equalTo(toEqual).once("value")
        
        return snapShot.exists()
    }

    const createReservation = async ({ schedule, table, date }) => {
        const reservationId = `${date}.${table}.${schedule}.${restaurantId}`
        const toPush = {
            user_uid: userSession.uid,
            restaurant_id: restaurantId,
            schedule,
            table,
            date,
            reservationId
        }

        const verify = await verifyIfExist(reservationId)

        if (!verify) {
            return firebaseDatabase.ref("/reservations/").push(toPush)
        } else {
            throw {
                error: true,
                message: "Esta reserva esta ocupada"
            }
        }
    }
    const doneHanler = (data) => {
        createReservation(data)
            .then(() => {
                console.log("Se guardo")
            })
            .catch((e) => {
                if (e.error) {
                    console.log(e.message)
                } else {
                    console.log(e)
                }
            })
    }

    useEffect(() => {
        getTables()
    }, [])

    if (!restaurantId) return <Redirect to="/home" />
    return (
        <div className="new-reservation">
            <Navigationbar/>
            <h3>{restaurantName}</h3>
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