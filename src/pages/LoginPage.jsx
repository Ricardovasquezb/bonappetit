import React from 'react';
import "../assets/css/login.css"
import LayoutType1 from '../components/LayoutType1';
import Logo from "../assets/img/Logo_Fondo_Blanco.png";
import Image from "../components/Image";
import Login from "../containers/Login"

const LoginPage = () => {
    return (
        <div className="login">
            <LayoutType1 
                boxOne={ <Image className="image" alt="Logo Titulo" src={Logo} /> } 
                boxTwo={<Login/>} 
            />
        </div>
    );
}

export default LoginPage;
