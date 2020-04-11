import React, { useState, useEffect } from 'react'
import Button from '../components/normalButton'
import '../assets/css/new-reservation.css'
import TextInput from "../components/TextInput"
import Card from '../components/Card'
import { useParams, Redirect } from "react-router-dom"
import NewReservation from '../containers/NewReservation'
import LayoutType1 from '../components/LayoutType1';
import LayoutRestaurant from '../containers/LayoutRestaurant'
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
    const [userInfo, setUserInfo] = useState([]);

    const [restaurantName, setrestaurantName] = useState("empty");

    const [layoutUrl,setlayoutUrl] = useState("empty")

    

    const getrestaurantName = ()=>{
        firebaseDatabase.ref(`/restaurants/${restaurantId}/name`).once("value")
        .then(snapShot=> {
             
            setrestaurantName(snapShot.val())
        })
        .catch(e=>{
            console.error(e)
        })
    }

    const getuserData = (async()=>{

        const uid = localStorage.getItem("user")

            const Data = await firebaseDatabase.ref(`/users/${uid}`).once("value")
            return Data.val()

        
    })

    const getrestaurantLayout = () => {
        firebaseDatabase.ref(`/restaurants/${restaurantId}/layouturl`).once("value")
            .then(snapShot => {
                const val = snapShot.val()
                setlayoutUrl(val)
            })
            .catch(e => {
                console.error(e)
            })
    }

    const getTables = () => {
        firebaseDatabase.ref(`/restaurants/${restaurantId}/tables`).once("value")
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
        

        if (!verify) { 
            const toPush = {
                user_uid: userSession,
                user: {user_uid : userSession ,...userInfo},
                restaurant_id: restaurantId,
                schedule,
                table,
                date,
                reservationId,
                active:false
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

        getrestaurantLayout()

        getuserData()
        .then((snapshot)=>{
            console.log(snapshot)
            setUserInfo(snapshot)
        })
    }, [])

    if (!restaurantId) return <Redirect to="/home" />
    return (
        <div className="new-reservation">
            <Navigationbar/>
            <h3 align="center">{restaurantName}</h3>
            <LayoutType1 
                boxOne={ <Image src={layoutUrl}/> }
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