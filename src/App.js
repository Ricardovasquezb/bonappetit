import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import "./assets/css/index.css"
import Login from "./pages/LoginPage"
import Register from "./pages/RegisterPage"
import ForgotPassword from './pages/ForgotPasswordPage'
import Home from './pages/HomePage'
import FirebaseInstance from './hooks/firebaseInstance'
import FirebaseContext from './hooks/firebaseContext'

 const Provider = FirebaseContext.Provider

 const App = ()=>{

    const firebaseInstance = FirebaseInstance();

    return(
        <Provider value={firebaseInstance}>
            <HashRouter>
                <Switch >
                    <Route exact path="/">
                        <Home/>
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
                    <Route exact path="/home">
                        <Home />
                    </Route>
                </Switch>
            </HashRouter>
        </Provider>
        
    )
 }


 export default App