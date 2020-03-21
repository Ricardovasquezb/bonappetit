import React from 'react'
import { useHistory } from "react-router-dom"
import "../assets/css/navigation-bar.css"
import { render } from '@testing-library/react'
import Logo from '../assets/img/Logo_Letra_Blanca.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'




const LoginNavBar = props =>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#login">
        <img
            alt=""
            src={Logo}
            width="100"
            className="d-inline-block align-top"
        />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="mr-auto">
        </Nav>
             <Button variant="outline-success" href="#register">Crear cuenta</Button>
         </Navbar.Collapse>
    </Navbar>
    );
}

export default LoginNavBar;