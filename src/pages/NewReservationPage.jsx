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
import sweetalert from 'sweetalert'
import { useHistory } from "react-router-dom"



const NewReservationsPage = ({ firebaseDatabase, firebaseAppAuth, userSession }) => {
    const { restaurantId } = useParams();

    const history = useHistory();


    const [tableList, setTableList] = useState([]);

    const [restaurantName, setrestaurantName] = useState("empty");

    const getrestaurantName = ()=>{
        firebaseDatabase.ref(`/restaurants/${restaurantId}/name`).once("value")
        .then(snapShot=> {
             
            setrestaurantName(snapShot.val())
        })
        .catch(e=>{
            console.error(e)
        })
    }

    const getTables = () => {
        firebaseDatabase.ref(`/restaurants${restaurantId}/tables`).once("value")
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
        const verify = await verifyIfExist(reservationId)
        
        console.log(verify)

        if (!verify) { 
            const toPush = {
                user_uid: userSession,
                restaurant_id: restaurantId,
                schedule,
                table,
                date,
                reservationId
            }
            return firebaseDatabase.ref("/reservations/").push(toPush)
             
        } else {
            throw {
                error: true,
                message: "Esta reserva esta ocupada",       
            }
            

            
        }
    }
    const doneHandler = (data) => {
        console.log(data)
        createReservation(data)
            .then(() => {
                sweetalert("Tu reservacion ha sido exitosamente registrada", {
                    icon: "success",
                  })
                  .then(()=>{
                    history.replace("/my-reservations")    
                  })            })
            .catch((e) => {
                if (e.error) {
                    sweetalert("Esta mesa ya esta ocupada", {
                        icon: "error",
                      })
                } else {
                    console.log(e)
                    console.log(localStorage.getItem('user'))
                }
            })
    }

    useEffect(() => {
        getrestaurantName()

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
                        done={doneHandler}
                    />
                } 
            />
            <Footer/>
        </div>
    );
}

export default NewReservationsPage