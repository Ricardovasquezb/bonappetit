import React, { useState } from 'react'
import Button from '../components/normalButton'
import TextButton from '../components/textButton'
import '../assets/css/login.css'
import TextInput from "../components/TextInput"
import Card from "../components/Card"
import { useHistory } from "react-router-dom"
import sweetalert from 'sweetalert'
import firebaseContext from "../hooks/firebaseContext"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
    
   
   return(
       <Consumer>
           {
               contextResult=>{
                //const firebase = contextResult.firebaseAppAuth;
                const firebase = {
                    signIn: (email, password)=> contextResult.firebaseAppAuth.signInWithEmailAndPassword(email, password),
                };
            

                return(
                    <Card mode='login-card'>
 
                        
                         <TextInput 
                            email
                            icon_mode='icon'
                            label="Usuario"
                            value={username}
                            icon='📧'
                            change={handleUsername}
                        /> 

                        <TextInput
                            password 
                            icon_mode='icon'
                            label="Contraseña"
                            value={password}
                            icon='🔑'
                            change={handlePassword}
                        />     

                        <Button darkmode click={ () => {
                            firebase.signIn(username,password)
                                .then((result)=> {
                                    console.log(result, result.user.uid)
                                    const uid = result.user.uid
                                    sweetalert("Estás dentro!","","success")
                                    history.push("/home")
                                })
                                .catch((e)=>{
            
                                })
                            
                        } }>
                           Iniciar Sesión
                        </Button>

                        <Button  click={ ()=>{

                                } }>
                            Iniciar con Google
                        </Button>

                        <div className='column'>
                            <TextButton click={ () => {
                            history.push("/forgot-password")
                        } }>
                                Olvidé mi contraseña
                            </TextButton>
                            <div/>
                      
                        </div>           
                       
                    </Card>
                )
               }
           }
       </Consumer>
   )
}


export default Login