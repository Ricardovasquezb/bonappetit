import React, { useState } from 'react'
import Button from '../components/normalButton';
import TextButton from '../components/textButton';
import '../assets/css/login.css';

const Login = props => {
    const [username, setUsername] = useState("");

    const handleUsername = e => {
        setUsername(e.target.value);
    }

    return(
        <div >
            <Button darkmode click={ () => {
                
            } }>
               Iniciar Sesión
            </Button>
            <div className='column'>
                <TextButton>
                    Olvidé mi contraseña
                </TextButton>
                <div className="below-line" />
                <TextButton>
                    ¿No tienes una cuenta?
                </TextButton>
            </div>
           

           
        </div>
    )
}

export default Login