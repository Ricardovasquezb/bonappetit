import React from 'react';
import "../assets/css/login.css"
import LayoutType1 from '../components/LayoutType1';
import LayoutType2 from '../components/LayoutType2';
import Logo from "../assets/img/Logo_Letra_Blanca.png";
import fondo from "../assets/img/fondo_blanco.jpeg";
import Image from "../components/Image";
import CarouselView from "../components/CarouselView";
import Login from "../containers/Login"
import LoginNavBar from "../containers/LoginNavBar"
import Footer from "../containers/Footer"

const LoginPage = () => {

    var Data = [
        {
            'src': 'http://www.singlecolorimage.com/get/33fd8f/1420x400',
            'label': '¿En casa?',
            'description': 'Realiza tus reservaciones desde la comodidad de tu hogar'
        },
        {
            'src': 'http://www.singlecolorimage.com/get/ff85a9/1420x400',
            'label': '¿En la oficina?',
            'description': '!Puedes hacerlo rápido!'
        },
        {
            'src': 'http://www.singlecolorimage.com/get/bfc7ff/1420x400',
            'label': '¿Cansad@?',
            'description': '!Siquiera tiene que pararte!'
        }
    ];
    
    return (
        <div>
            <LoginNavBar/>
            <div className='login-background'>
                <LayoutType1
                    boxOne={ <Image src={Logo}/> } 
                    boxTwo={<Login/>} 
                />
            </div>
            <CarouselView source={Data}/>
            <Footer/>
        </div>
    );
}

export default LoginPage;