import React from 'react';
import "../assets/css/login.css"
import LayoutType1 from '../components/LayoutType1';
import Logo from "../assets/img/Logo_Fondo_Blanco.png";
import Image from "../components/Image";

const Login = () => {
    return (
        <div className="login">
            <LayoutType1 
                boxOne={ () => <Image src={Logo} />} 
                boxTwo={"xd"} 
            />
        </div>
    );
}

export default Login;
