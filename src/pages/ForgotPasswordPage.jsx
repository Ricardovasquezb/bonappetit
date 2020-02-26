import React from 'react'
import "../assets/css/forgot-password.css"
import LayoutType2 from "../components/LayoutType2"
import ForgotPassword from "../containers/ForgotPassword"

const ForgotPasswordPage = () => {
    return (
       <div className="forgot-password">
           <LayoutType2
                Box={<ForgotPassword/>}
           />
       </div>
    )
}

export default ForgotPasswordPage
