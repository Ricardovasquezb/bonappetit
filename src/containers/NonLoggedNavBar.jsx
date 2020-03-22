import React from 'react'
import { useHistory } from "react-router-dom"
import "../assets/css/navigation-bar.css"
import { render } from '@testing-library/react'
import Logo from '../assets/img/Logo_Letra_Blanca.png'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'


const NLNavBar = props => {

    let pages = [
        {label: 'Inicio', link: '/'}
    ];
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
            <Navbar.Text>
                {props.Tittle}
            </Navbar.Text>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    );
}

export default NLNavBar;