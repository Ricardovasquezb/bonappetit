import React from 'react'
import { useHistory } from "react-router-dom"
import "../assets/css/navigation-bar.css"
import { render } from '@testing-library/react'
import Logo from '../assets/img/Logo_Letra_Blanca.png'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'


const NavigationbarHost = props => {

    let pages = [
        {label: 'Inicio', link: '/'}
    ];
    const onExit = ()=>{
        localStorage.clear()
    }
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src={Logo}
                width="100"
                className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
            <Navbar.Text>
                {props.Tittle}
            </Navbar.Text>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="mr-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#all-reservations">Reservaciones</Nav.Link>
                    {/* <Nav.Link href="#statistics">Estadisticas</Nav.Link> */}
                </Nav>
                <Nav>

                 <Nav.Link href="#settings">Perfil</Nav.Link>
                <Button variant="outline-danger" href="#login" onClick={onExit}>Salir</Button>
                </Nav>
             </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationbarHost;