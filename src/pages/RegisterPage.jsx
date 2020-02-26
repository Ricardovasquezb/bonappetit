import React from 'react'
import "../assets/css/register.css"
import LayoutType2 from '../components/LayoutType2'
import Register from '../containers/Register'

const RegisterPage = props => {
    return(
        <div className="register">
            <LayoutType2
            Box={<Register/>}
            /> 
        </div>
    )
}

export default RegisterPage