import React, {useState} from 'react'
import Button from '../components/normalButton'
import '../assets/css/forgot-password.css'
import TextInput from '../components/TextInput'
import { useHistory } from "react-router-dom"
import Card from '../components/Card'
import Text from '../components/Text'

const ForgotPassword = props => {


    const [email, setEmail] = useState("");
    const history = useHistory();

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    return (
        <Card mode='darkmode-forgotPassword'>
            <Text
                children = "Ingrese su correo electrónico para poder comprobar su identidad"
            />

            
            <TextInput text-input
                label="Correo Electrónico"
                value = {email}
                change = {handleEmail}
            />   

            <Button darkmode click = { ()=>{


            } }>
                Recuperar Contraseña
            </Button>
        </Card>
    )
}

export default ForgotPassword
