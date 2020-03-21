import React from 'react'
import Home from '../containers/Home'
import Navigationbar from "../containers/NavigationBar"


const HomePage = props => {
    return(
        <div>
            <Navigationbar/>
            <Home/>
        </div>
    )
}

export default HomePage
