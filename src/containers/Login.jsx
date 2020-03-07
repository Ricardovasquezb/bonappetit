import React, { useState } from 'react'
import Button from '../components/normalButton'
import TextButton from '../components/textButton'
import '../assets/css/login.css'
import TextInput from "../components/TextInput"
import Card from "../components/Card"
import { useHistory } from "react-router-dom"
import sweetalert from 'sweetalert'
import firebaseContext from "../hooks/firebaseContext"

const Consumer = firebaseContext



const Login = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();


    const handleUsername = e => {
        setUsername(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    
    //console.log(username,password)
   
   return(
       <Consumer>
           {
               contextResult=>{
                //const firebase = contextResult.firebaseAppAuth;
                const firebase = {
                    signIn: (email, password)=> contextResult.firebaseAppAuth.signInWithEmailAndPassword(email, password),
        
                };
            

                return(
                    <Card >
                        <TextInput 
                            email
                            label="Usuario"
                            value={username}
                            change={handleUsername}
                        />
                        <TextInput
                            password 
                            label="Contraseña"
                            value={password}
                            change={handlePassword}
                        />            
                        <Button darkmode click={ () => {
                            firebase.signIn(username,password)
                                .then((result)=> {
                                    console.log(result, result.user.uid)
                                    const uid = result.user.uid
                                    sweetalert("Estas dentro!","","success")
                                    history.push("/home")
                                })
                                .catch((e)=>{
            
                                })
                            
                        } }>
                           Iniciar Sesión
                        </Button>
                        <div className='column'>
                            <TextButton click={ () => {
                            history.push("/forgot-password")
                        } }>
                                Olvidé mi contraseña
                            </TextButton>
                            <div className="below-line" />
                            <TextButton click={ () => {
                            history.push("/register")
                        } }>
                                ¿No tienes una cuenta?
                            </TextButton>
                        </div>
                       <div className='row'>
                       <Button  click={ ()=>{
            
                       } }>
                           Iniciar con Google
                        </Button>
                        <Button darkmode click={ () => {
                            history.push("/register")
                        } }>
                           Crear cuenta
                        </Button>
                       </div>
            
                       
                    </Card>
                )
               }
           }
       </Consumer>
   )
}


export default Login