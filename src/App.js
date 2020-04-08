import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import "./assets/css/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/LoginPage"
import Register from "./pages/RegisterPage"
import RegisterRestaurant from "./pages/RegisterRestaurantPage"
import ForgotPassword from './pages/ForgotPasswordPage'
import Home from './pages/HomePage'
import NewReservation from './pages/NewReservationPage'
import FirebaseInstance from './hooks/firebaseInstance'
import FirebaseContext from './hooks/firebaseContext'
import MyReservations from './pages/MyReservationsPage';
import AboutUs from './pages/AboutUsPage';
import SettingsPage from './pages/SettingsPage';
import AllReservationsHostPage from './pages/AllReservationsHostPage';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
    faCheckSquare, faCoffee,faAngleUp,
    faAngleDown,   faArrowLeft,     faArrowRight,
    faEllipsisH, faSpinner, faCalendarCheck, faStarHalfAlt, faUsers, 
    faKey, faAt, faChartLine} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faAngleUp,
    faAngleDown,   faArrowLeft,     faArrowRight,
    faEllipsisH, faSpinner, faCalendarCheck,
    faStarHalfAlt, faUsers, faKey, faAt, faChartLine)

 const Provider = FirebaseContext.Provider

 const App = () => {
    const [userSession, setUserSession] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

   const firebaseInstance = FirebaseInstance();
    

    return(
        <Provider value={firebaseInstance}>
            <HashRouter>
                <Switch >
                    <Route exact path="/">
                        <Login/>
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route> 
                    <Route exact path="/register-restaurante">
                        <RegisterRestaurant />
                    </Route>
                    <Route exact path="/forgot-password">
                        <ForgotPassword />
                    </Route>
                    <Route path="/new-reservation/:restaurantId">
                        <NewReservation 
                            userSession={localStorage.getItem("user")}
                            firebaseAppAuth={firebaseInstance.firebaseAppAuth}
                            firebaseDatabase={firebaseInstance.firebaseDatabase}
                        />
                    </Route>
                    <Route exact path="/my-reservations">
                        <MyReservations 
                            isLoading={isLoading}
                            userSession={localStorage.getItem("user")}
                            firebaseAppAuth={firebaseInstance.firebaseAppAuth}
                            firebaseDatabase={firebaseInstance.firebaseDatabase}
                        />
                    </Route>
                    <Route exact path="/all-reservations">
                        <AllReservationsHostPage />
                    </Route>
                    <Route exact path="/about-us">
                        <AboutUs />
                    </Route>
                    <Route exact path="/reservation-detail">
                        <AboutUs />
                    </Route>
                    <Route exact path="/settings">
                        <SettingsPage/>
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                </Switch>
            </HashRouter>
        </Provider>
        
    )
 }


 export default App