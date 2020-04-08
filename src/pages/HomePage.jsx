import React, { useState, useEffect } from 'react'

import Home from '../containers/Home'
import HomeHost from '../containers/HomeHost'
import Navigationbar from "../containers/NavigationBar"
import NavigationbarHost from "../containers/NavigationBarHost"
import Footer from '../containers/Footer'
import * as firebase from 'firebase/app'
import 'firebase/auth';



const HomePage = props => {


    const [loggedUser, setloggedUser] = useState(null);
    const [dataReady, setdataReady] = useState(false);
    const restData=null;

    const gettingrestaurantData = (async()=>{

        console.log(localStorage.getItem("user"),localStorage.getItem("role"))
        const uid = localStorage.getItem("user")
        const role = localStorage.getItem("role")

        if(role === 'host'){
            const restData = await firebase.database().ref(`/restaurants/`).orderByChild("host").equalTo(uid).once("value")
            return restData.val()

        }
    })

    useEffect(() => {
        gettingrestaurantData()
        .then((snapshot)=>{
             restData = snapshot
             setdataReady(true)
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
        if (loggedUser.role === 'client') {
            return (
                <div>
                    <Navigationbar title={loggedUser.name} />
                    <Home user={loggedUser} />
                    <Footer />
                </div>
            )
        } else if (loggedUser.role === 'host') {
            return (
                <div>
                    <NavigationbarHost user={loggedUser} />
                    <HomeHost user={loggedUser} />
                    <Footer />
                </div>
            )
        } else if (loggedUser.role === 'admin') {
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
