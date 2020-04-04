import React, {useState} from 'react'

import { useHistory } from "react-router-dom"
import sweetalert from 'sweetalert'
import firebaseContext from "../hooks/firebaseContext"

import MyReservations from '../containers/MyReservations'
import LayoutType2 from '../components/LayoutType2';
import Navigationbar from "../containers/NavigationBar"
import Footer from "../containers/Footer"

const MyReservationsPage = props => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpass, setRepeatpass] = useState("");
    const history = useHistory();

    return (
        <div>
            <Navigationbar/>
            <LayoutType2
                Box={ <MyReservations/> }
            />
            <Footer/>
        </div>
    );
}

export default MyReservationsPage