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


const Navigationbar = props => {

    let pages = [
        {label: 'Inicio', link: '/'}
    ];
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
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="mr-auto">
                 <Nav.Link href="#home">Home</Nav.Link>
                 <NavDropdown title="Reservaciones" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#new-reservation">Nueva Reservación</NavDropdown.Item>
                     <NavDropdown.Item href="#my-reservations">Mis Reservaciones</NavDropdown.Item>
                     {/* <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">Cancelar Reservación</NavDropdown.Item> */}
                 </NavDropdown>
                 </Nav>
                 <FormControl type="text" placeholder="Escriba aqui para buscar" className=" mr-sm-2" />
                 {/* <Form inline>
                 <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                 <Button variant="outline-success">Search</Button>
                 </Form> */}
                 <Button variant="outline-danger" href="#login">Salir</Button>
             </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar;