import React, {useState} from 'react'
import Button from '../components/normalButton'
import '../assets/css/forgot-password.css'
import TextInput from '../components/TextInput'
import { useHistory } from "react-router-dom"
import Card from '../components/Card'
import Text from '../components/Text'
import sweetalert from 'sweetalert'
import firebaseContext from "../hooks/firebaseContext"



const ForgotPassword = props => {

    const Consumer = firebaseContext.Consumer

    const [email, setEmail] = useState("");
    const history = useHistory();

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    return(
        <Consumer>
            {
                contextResult=>{
                 //const firebase = contextResult.firebaseAppAuth;
                 const firebase = {
                     appAuth: ()=> contextResult.firebaseAppAuth,

                 };

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
                            firebase.appAuth().sendPasswordResetEmail(email)
                            .then((result)=>{
                                console.log(result)
                                sweetalert({
                                        title: "¿Enviar correo de reseteo de contraseña?",
                                        text: "Se te enviara un correo con un link que te permitira resetear tu contraseña",
                                        icon: "warning",
                                        buttons: true,
                                        dangerMode: true,
                                })
                                    .then(()=>{
                                        firebase.appAuth().sendPasswordResetEmail(email)
                                            .then((result) => {
                                                sweetalert("Se ha envidao un correo que te permitira cambiar tu contraseña a tu email", {
                                                icon: "success"})
                                                    .then(()=>{
                                                        history.replace("/login")
                                                    });
                                                })
                                            })
                                                .catch((error)=>{
                                                    console.log(error)
                                                })
                                        
                            }) 

                            .catch((e)=>{
                                console.log(e)
                                switch (e.code) {
                                    case "auth/user-not-found":
                                        sweetalert("Este correo no existe",{icon:"error"})
                                        .then(()=>{
                                         history.replace("/forgot-password")
                                        })
                                        break;
                                    case "auth/invalid-email":
                                        sweetalert("El formato del correo es incorrecto",{icon:"error"})
                                        .then(()=>{
                                         history.replace("/forgot-password")
                                        })
                                        break;
                                
                                    default:
                                        break;
                                }
                                
                            })
                        } }>
                            Recuperar Contraseña
                        </Button>
                    </Card>
                )
                }

            }
        </Consumer>
    )
}
export default ForgotPassword
