import React, {useState} from 'react'
import Button from '../components/normalButton'
import '../assets/css/register.css'
import TextInput from "../components/TextInput"
import Card from '../components/Card'
import { useHistory } from "react-router-dom"
import useFirebase from "../hooks/firebase"
import sweetalert from 'sweetalert';

const Register = props => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpass, setRepeatpass] = useState("");
    const history = useHistory();
    const firebase = useFirebase()();

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
                if(password===repeatpass){

                }
                firebase.signUp(email,password)
                    .then((result) => {
                        console.log(result)
                        sweetalert("Registro Exitoso!", "Se ha registrado exitosamente!", "success")
                        history.push("/login")
                    })
                    .catch((e) => {
                        console.error(e)
                        if(e.code === "auth/email-already-in-use"){
                            sweetalert("Oops!", e.message , "error");    
                                            }
                        if(e.code === "auth/invalid-email"){
                            sweetalert("Hey!", e.message , "error");    
                                            }
                        if(e.code === "auth/weak-password"){
                            sweetalert("C'mon!", e.message , "warning");    
                                            }
                    });

            } }>
               Crear Cuenta
            </Button>
        </Card>
    )
}

export default Register