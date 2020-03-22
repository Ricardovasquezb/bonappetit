import React from 'react'
import "../assets/css/register.css"
import LayoutType2 from '../components/LayoutType2'
import Register from '../containers/Register'
import NLNavBar from "../containers/NonLoggedNavBar"

const RegisterPage = props => {
    return(
        <div className="register">
            <NLNavBar Tittle="Registro"/>
            <LayoutType2
            Box={<Register/>}
            /> 
        </div>
    )
}

export default RegisterPage