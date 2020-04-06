import React from 'react';
import '../assets/css/footer.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Imagen from '../assets/img/Copa_Blanca.png'

const Footer = props => {
    return(
        <Navbar collapseOnSelect  sticky="bottom" expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">
                Bon APPetit
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#about-us">Quienes Somos</Nav.Link>
                {/* <Nav.Link href="#contact">Contacto</Nav.Link>
                <Nav.Link href="#help">Ayuda</Nav.Link> */}
            </Nav>

            <Nav>
            <Nav.Link eventKey={2}>
                    <img src={Imagen} width="10"/>
                    &copy; {new Date().getFullYear()} Copyright: BonAPPetit.com
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

    );
}

export default Footer;