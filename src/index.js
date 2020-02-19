import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Switch,
    Route
} from "react-router-dom";
import "./assets/css/index.css"
import Login from "./pages/LoginPage"
import Register from "./pages/RegisterPage"

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);