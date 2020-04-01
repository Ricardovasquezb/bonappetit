import React from 'react'
import "../assets/css/register.css"
import LayoutType2 from '../components/LayoutType2'
import Register from '../containers/Register'
import NLNavBar from "../containers/NonLoggedNavBar"
import Footer from '../containers/Footer'

const RegisterPage = props => {
    return(
        <div>
            <NLNavBar Tittle="Registro"/>
            <div className="register-background">
                <LayoutType2
                Box={<Register/>}
                /> 
            </div>
            <Footer/>
        </div>
    )
}

export default RegisterPage