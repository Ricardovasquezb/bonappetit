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
import Image from 'react-bootstrap/Image'
import * as firebase from 'firebase/app'
import Lodash from 'lodash';


const defaultImg = "https://weareunlimited.org.uk/wp-content/uploads/2017/11/default-profile.jpg"


const Navigationbar = props => {

    var User = props.user
    console.log(User)
    
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
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="mr-auto">
                 <Nav.Link href="#home">Inicio</Nav.Link>
                 <NavDropdown title="Reservaciones" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#my-reservations">Mis Reservaciones</NavDropdown.Item>
                     <NavDropdown.Item href="#history">Historial de Reservaciones</NavDropdown.Item>
                 </NavDropdown>          
                 </Nav>
                     <Nav>
                     <Image src={Lodash.get(User,["photoURL"],defaultImg)} width="40" height="40" roundedCircle/>
                     {/* <Nav.Link href="#settings">Perfil</Nav.Link> */}

                    <Button variant="outline-danger" href="#login" onClick={onExit}>Salir</Button>
                     </Nav>
             </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar;