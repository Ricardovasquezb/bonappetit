import React from 'react'
import "../assets/css/register.css"
import LayoutType2 from '../components/LayoutType2'
import Register from '../containers/RegisterRestaurant'
import NLNavBar from "../containers/NonLoggedNavBar"
import Footer from '../containers/Footer'

const RegisterRestaurantPage = props => {
    return(
        <div>
            <NLNavBar Tittle="Registro de Restaurante"/>
            <div className="register-background">
                <LayoutType2
                Box={<Register/>}
                /> 
            </div>
            <Footer/>
        </div>
    )
}

export default RegisterRestaurantPage