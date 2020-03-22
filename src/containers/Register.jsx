import React, {useState} from 'react'
import Button from '../components/normalButton'
import '../assets/css/register.css'
import TextInput from "../components/TextInput"
import Card from '../components/Card'
import { useHistory } from "react-router-dom"
import sweetalert from 'sweetalert'
import firebaseContext from "../hooks/firebaseContext"


const imgUrl ="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.svgrepo.com%2Fshow%2F164688%2Fblank-user.svg&imgrefurl=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F164688%2Fblank-user&docid=4qsao-ll0DDAXM&tbnid=5F-Xyl9A83DepM%3A&vet=10ahUKEwi2wM3QuYHoAhWjd98KHRcaCh0QMwhLKAAwAA..i&w=800&h=800&client=safari&bih=1017&biw=1920&q=user%20blank%20icon&ved=0ahUKEwi2wM3QuYHoAhWjd98KHRcaCh0QMwhLKAAwAA&iact=mrc&uact=8"
const Consumer = firebaseContext.Consumer

const Register = props => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpass, setRepeatpass] = useState("");
    const history = useHistory();

    return (
        <Consumer>
            {
                contextResult => {
                    const firebase = {
                        signUp: (email, password) => contextResult.firebaseAppAuth.createUserWithEmailAndPassword(email, password),
                        write: (user,uid) =>contextResult.firebaseDatabase.ref(`users/${uid}`).set(user),
                        appAuth:() =>contextResult.firebaseAppAuth
                    }

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
                                
                                firebase.signUp(email,password)
                                    .then((result) => {
                                        console.log(result, result.user.uid)
                                        const user= firebase.appAuth().currentUser;
                                        firebase.write({
                                            name,
                                            lastname,
                                            role: 'client',
                                            imgUrl
                                        },result.user.uid)
                                            .then(value => {
                                                console.log(value)
                                            })
                                            .catch(err => {
                                                console.log(err)
                                            });
                                            
                                        
                                        user.sendEmailVerification()
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
            }
        </Consumer>
    )
}
export default Register