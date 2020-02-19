import React, { useState } from 'react'
import Button from '../components/normalButton';
import Input from "../components/TextInput"

const Login = props => {
    const [username, setUsername] = useState("");

    const handleUsername = e => {
        setUsername(e.target.value);
    }

    return(
        <div>
            <Input 
                label={"Texto de prueba"}
                value={username}
                change={handleUsername}
            />
            <Input 
                label={"Texto de prueba"}
                value={username}
                change={handleUsername}
            />
                        
            <Button darkmode click={ () => {
                
            } }>
               Iniciar Sesión
            </Button>
        </div>
    )
}

export default Login