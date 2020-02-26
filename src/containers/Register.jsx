import React, {useState} from 'react'
import Button from '../components/normalButton'
import '../assets/css/register.css'
import TextInput from "../components/TextInput"
import Card from '../components/Card'
import { useHistory } from "react-router-dom"

const Register = props => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpass, setRepeatpass] = useState("");
    const history = useHistory();
    
    const handleName = e => {
        setName(e.target.value);
    }
    const handleLastname = e => {
        setLastname(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleRepeatpass = e => {
        setRepeatpass(e.target.value);
    }

    return(
        <Card>
            <TextInput 
                label="Nombre"
                value={name}
                change={handleName}
            />
            <TextInput 
                label="Apellido"
                value={lastname}
                change={handleLastname}
            />
            <TextInput 
                label="Correo Electrónico"
                value={email}
                change={handleEmail}
            />
            <TextInput
                password 
                label="Contraseña"
                value={password}
                change={handlePassword}
            />            
            <TextInput
                password 
                label="Repetir Contraseña"
                value={repeatpass}
                change={handleRepeatpass}
            />            
            <Button darkmode click={ () => {
                history.push("/login")
            } }>
               Crear Cuenta
            </Button>
        </Card>
    )
}

export default Register