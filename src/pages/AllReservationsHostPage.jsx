import React from 'react'

import AllReservationsHost from '../containers/AllReservationsHost'
import NavigationBarHost from '../containers/NavigationBarHost'
import Footer from '../containers/Footer'

const AllReservationsHostPage = props =>{
    return(
        <div>
            <NavigationBarHost/>
            <AllReservationsHost/>
            <Footer/>
        </div>
    );
}

export default AllReservationsHostPage