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
                                history.replace("/login")

                            })

                            .catch((e)=>{
                                console.log(e)
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
