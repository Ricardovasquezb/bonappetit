import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import "../assets/css/home.css"

const Home = props =>{
    
    const [Username, setUserName] = useState("Welcome to the Home!");

    const handleUserName = e => {
        setUserName(e.target.value);
    }
    
    return(
        <div className='home'>

        <h1>Welcome to the Home!</h1>
        </div>
    );
}

export default Home;