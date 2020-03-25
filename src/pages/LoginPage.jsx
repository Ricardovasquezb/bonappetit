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
            'src': 'https://images.squarespace-cdn.com/content/v1/59121c03e58c6261e471ad5a/1552653735675-V7YQG7ND514QONW6B73V/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/color-blanco.jpg?format=1500w',
            'label': '¿En casa?',
            'description': 'Realiza tus reservaciones desde la comodidad de tu hogar'
        },
        {
            'src': 'https://images.squarespace-cdn.com/content/v1/59121c03e58c6261e471ad5a/1552653735675-V7YQG7ND514QONW6B73V/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/color-blanco.jpg?format=1500w',
            'label': '¿En la oficina?',
            'description': '!Puedes hacerlo rápido!'
        },
        {
            'src': 'https://images.squarespace-cdn.com/content/v1/59121c03e58c6261e471ad5a/1552653735675-V7YQG7ND514QONW6B73V/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/color-blanco.jpg?format=1500w',
            'label': '¿Cansasdo?',
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