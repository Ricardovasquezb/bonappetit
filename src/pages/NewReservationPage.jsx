import React, {useState} from 'react'
import Button from '../components/normalButton'
import '../assets/css/register.css'
import TextInput from "../components/TextInput"
import Card from '../components/Card'
import { useHistory } from "react-router-dom"
import sweetalert from 'sweetalert'
import firebaseContext from "../hooks/firebaseContext"
import NewReservation from '../containers/NewReservation'
import LayoutType1 from '../components/LayoutType1';
import LayoutRestaurant from '../containers/LayoutRestaurant'
import LayoutTest from '../assets/img/LayoutTest.png'
import Image from "../components/Image";
import Navigationbar from "../containers/NavigationBar"




const MyReservationsPage = props => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpass, setRepeatpass] = useState("");
    const history = useHistory();

    return (
        <div className="MyReservations">
            <Navigationbar/>
            <LayoutType1 
                boxOne={ <Image src={LayoutTest}/> }
                boxTwo={<NewReservation/>} 
            />
        </div>
    );
}

export default MyReservationsPage