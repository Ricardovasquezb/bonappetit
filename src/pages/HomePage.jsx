import React from 'react'
import Home from '../containers/Home'
import Navigationbar from "../containers/NavigationBar"
import Footer from '../containers/Footer'


const HomePage = props => {
    return(
        <div>
            <Navigationbar/>
            <Home/>
            <Footer/>
        </div>
    )
}

export default HomePage
