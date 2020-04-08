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
    const [restaurantData, setrestaurantData] = useState(null)

    
    // const gettingLoggedUserData = async () => {
    //     const snapshot = await firebase.database().ref("/users/" + localStorage.getItem("user")).once("value")
    //     return snapshot.val()

    // }
    const gettingRestaurantData = async () => {
        
        console.log(localStorage.getItem("role"))
        if (localStorage.getItem("role") === "host") {
            const snapshot =  await firebase.database().ref("/restaurants/").orderByChild("host").equalTo(localStorage.getItem("user")).once("value")
            return snapshot.val()
        }
    }


    useEffect(() => {
       gettingRestaurantData()
       .then(result=>{
           console.log(result)

       })
    }, [])
    // useEffect(() => {
    //     gettingRestaurantData(loggedUser)
    //     .then(snap => {
    //         console.log(snap.val())
    //         setrestaurantData(snap.val())
    //         console.log(restaurantData)
    //         setdataReady(true)
    //     })
    //     .catch((e)=>{

    //     })
    // },[])

   


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
