import React from 'react'

import Home from '../containers/Home'
import HomeHost from '../containers/HomeHost'
import Navigationbar from "../containers/NavigationBar"
import NavigationbarHost from "../containers/NavigationBarHost"
import Footer from '../containers/Footer'
import * as firebase from 'firebase/app'
import 'firebase/auth';



const HomePage = ({ firebaseDatabase }) => {
   
    var User = {
        type : 2,
        name : 'Josias Ramon',
        lastname : 'Carmona Amparo',
        email: 'joracaam@gmail.com',
        tel: '+1 (809) 154 3443',
        address : 'Manzana i, No. 9, Res. Villas de Pantoja, Sto. Dgo. oeste',
        city: 'Santo Domingo'
    };

   

    if(User.type == 1)
    { return(
        <div>
            <Navigationbar title={User.name}/>
                <Home user={User}/>
            <Footer/>
        </div>
    )}

    else if(User.type == 2)
    {
        return(
            <div>
                <NavigationbarHost user={User}/>
                    <HomeHost 
                        user={User}
                        firebaseDatabase={firebaseDatabase}
                    />
                <Footer/>
            </div>
        )
    }
}

export default HomePage
