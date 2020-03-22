import React from 'react';
import "../assets/css/login.css"
import LayoutType1 from '../components/LayoutType1';
import Logo from "../assets/img/Logo_Fondo_Blanco.png";
import Image from "../components/Image";
import Carousel from "../components/CarouselView";
import Login from "../containers/Login"
import LoginNavBar from "../containers/LoginNavBar"

const LoginPage = () => {
    return (
        <div>
            <LoginNavBar/>
            <LayoutType1
                boxOne={ <Image src={Logo}/> } 
                boxTwo={<Login/>} 
            />
        </div>
    );
}

export default LoginPage;