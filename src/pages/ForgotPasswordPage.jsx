import React from 'react'
import "../assets/css/forgot-password.css"
import LayoutType2 from "../components/LayoutType2"
import ForgotPassword from "../containers/ForgotPassword"
import NLNavBar from "../containers/NonLoggedNavBar"
import Footer from "../containers/Footer"


const ForgotPasswordPage = () => {
    return (
       <div className='fondo'>
           <NLNavBar Tittle="Recuperar contraseña"/>
           <div className="forgot-password">

           <LayoutType2
                Box={<ForgotPassword/>}
           />
           </div>
           <Footer/>
       </div>
    )
}

export default ForgotPasswordPage
