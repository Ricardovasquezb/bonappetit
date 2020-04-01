import React from 'react';
import AboutUs from '../containers/AboutUs'
import Nav from '../containers/NonLoggedNavBar'
import Footer from '../containers/Footer'

const AboutUsPage = props => {
    return(
        <div>
            <Nav Tittle='Quienes Somos'/>
            <AboutUs/>
            <Footer/>
        </div>
    );
}

export default AboutUsPage;