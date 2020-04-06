import React from 'react'
import Settings from '../containers/Settings'
import SettingsHost from '../containers/SettingsHost'

import NavigationBar from '../containers/NavigationBar'
import NavigationBarHost from '../containers/NavigationBarHost'


import Footer from '../containers/Footer'



const SettingsPage = props =>{
      
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
    {
        return(
        <div>
            <NavigationBar/>
            <Settings user={User}/>
            <Footer/>
        </div>
        );
    }

    else if(User.type == 2)
    {
        return(
        <div>
            <NavigationBarHost/>
            <SettingsHost user={User}/>
            <Footer/>
        </div>
        );
    }

}

export default SettingsPage