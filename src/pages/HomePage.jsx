import React, { useState, useEffect } from 'react'

import Home from '../containers/Home'
import HomeHost from '../containers/HomeHost'
import Navigationbar from "../containers/NavigationBar"
import NavigationbarHost from "../containers/NavigationBarHost"
import Footer from '../containers/Footer'
import * as firebase from 'firebase/app'
import 'firebase/auth';
import { useHistory } from "react-router-dom"


import { arrayFirebaseParser } from "../utils/index"




const HomePage = props => {

    if(localStorage.getItem("role")===null && localStorage.getItem("user")){
        history.replace("/login")
        console.log('no hay nadie')
       

    }

    const history = useHistory();

    const [loggedUser, setloggedUser] = useState(null);
    const [dataReady, setdataReady] = useState(false);
    const [restData,setRestData] = useState([])
    const [userData,setUserData] = useState([])


    const gettingrestaurantData = (async()=>{

        const uid = localStorage.getItem("user")
        const role = localStorage.getItem("role")

        if(role === 'host'){
            const Data = await firebase.database().ref(`/restaurants/`).orderByChild("host").equalTo(uid).once("value")
            return Data.val()

        }
    })

    const getuserData = (async()=>{

        const uid = localStorage.getItem("user")

            const Data = await firebase.database().ref(`/users/${uid}`).once("value")
            return Data.val()

        
    })

    useEffect(() => {
        getuserData()
        .then((snapshot)=>{
            setUserData(snapshot)
            // userData=snapshot
            gettingrestaurantData()
            .then((snapshot)=>{
                setRestData(snapshot)
                //  restData = snapshot
                 setdataReady(true)
            })
        })
       
        .catch((e)=>{
            console.log(e)
        })
        
    },[])

    

    if (!dataReady) {
        return (
            <div>
                <Navigationbar title={"empty"} />

                <Footer />
            </div>
        )
    } else {
        if (localStorage.getItem("role") === 'client') {
            return (
                <div>
                    <Navigationbar title={userData.name} />
                    <Home user={userData} />
                    <Footer />
                </div>
            )
        } else if (localStorage.getItem("role") === 'host') {
            return (
                <div>
                    <NavigationbarHost user={userData} />
                    <HomeHost user={restData} />
                    <Footer />
                </div>
            )
        } else if (localStorage.getItem("role") === 'admin') {
            return (
                <div>
                    {/* <NavigationbarHost user={User}/>
                        <HomeHost user={User}/>
                    <Footer/> */}
                </div>
            )
        }
    }

}

export default HomePage
