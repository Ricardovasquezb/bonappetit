import React from 'react';
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
    faEllipsisH, faSpinner, faCalendarCheck, faStarHalfAlt, faUsers, faKey, faAt} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faAngleUp,
    faAngleDown,   faArrowLeft,     faArrowRight,
    faEllipsisH, faSpinner, faCalendarCheck,faStarHalfAlt, faUsers, faKey, faAt)

 const Provider = FirebaseContext.Provider

 const App = ()=>{

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
                    <Route exact path="/forgot-password">
                        <ForgotPassword />
                    </Route>
                    <Route exact path="/new-reservation">
                        <NewReservation />
                    </Route>
                    <Route exact path="/my-reservations">
                        <MyReservations />
                    </Route>
                    <Route exact path="/all-reservations">
                        <AllReservationsHostPage />
                    </Route>
                    <Route exact path="/about-us">
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