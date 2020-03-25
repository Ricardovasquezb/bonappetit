import React from 'react';
import "../assets/css/login.css"
import LayoutType1 from '../components/LayoutType1';
import Logo from "../assets/img/Logo_Fondo_Blanco.png";
import fondo from "../assets/img/Logo_Fondo_Blanco.png";
import Image from "../components/Image";
import CarouselView from "../components/CarouselView";
import Login from "../containers/Login"
import LoginNavBar from "../containers/LoginNavBar"

const LoginPage = () => {

    var Data = [
        {
            'src': 'https://images.clarin.com/2020/03/16/como-lograr-trabajar-desde-casa___bouTRX4e_1256x620__1.jpg',
            'label': '¿En casa?',
            'description': 'Realiza tus reservaciones desde la comodidad de tu hogar'
        },
        {
            'src': 'https://d286ib5nnf9jej.cloudfront.net/wp-content/uploads/2015/06/shutterstock_139876522-750x500.jpg',
            'label': '¿En la oficina?',
            'description': '!Puedes hacerlo rápido!'
        },
        {
            'src': 'https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/08/24/Recortada/img_cris_20180824-153324_imagenes_lv_otras_fuentes_istock-831879926-kFhE-U451424521555sNG-992x558@LaVanguardia-Web.jpg',
            'label': '¿Cansado?',
            'description': '!Siquiera tiene que pararte!'
        }
    ];
    return (
        <div>
            <LoginNavBar/>
            <LayoutType1
                boxOne={ <CarouselView source={Data}/> } 
                boxTwo={<Login/>} 
            />
        </div>
    );
}

export default LoginPage;