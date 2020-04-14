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
                    appAuth: ()=> contextResult.firebaseAppAuth,
                    provider:()=> contextResult.provider,
                    read: (uid) => contextResult.firebaseDatabase.ref(`users/${uid}`).once('value'),
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
                                const uid = result.user.uid
                                localStorage.setItem("user",uid)
                                var user = firebase.appAuth().currentUser;
                                // if(user.emailVerified){
                                    if(user== null){
                                        sweetalert("Debes registrarte para hacer login con estas credenciales.","","error")
                                        history.replace("/login")
                                    }else{
                                        firebase.read(user.uid)
                                        .then(function (snapshot) {
                                            localStorage.setItem("role", snapshot.val().role)
                                            history.push("/home")
                                        })
                                        .catch(function (error) {
                        
                                        })
                                    };
                                // }else{
                                //     sweetalert("Correo no verificado","Porfavor revisa tu bandeja de entrada y verifica tu correo para acceder a la plataforma","error")
                                //     .then(()=>{
                                //         window.location.reload()

                                //     })
                                // }
                                

                            })
                            .catch((e)=>{
                                sweetalert(e.code,e.message,"error")
        
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