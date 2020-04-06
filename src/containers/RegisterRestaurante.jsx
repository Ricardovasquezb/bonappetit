import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import sweetalert from 'sweetalert'

import firebaseContext from "../hooks/firebaseContext"

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import '../assets/css/register.css'

import Button from '../components/normalButton'
import TextInput from "../components/TextInput"
import HCard from '../components/HCard'
import Card from '../components/Card'



const imgUrl ="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.svgrepo.com%2Fshow%2F164688%2Fblank-user.svg&imgrefurl=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F164688%2Fblank-user&docid=4qsao-ll0DDAXM&tbnid=5F-Xyl9A83DepM%3A&vet=10ahUKEwi2wM3QuYHoAhWjd98KHRcaCh0QMwhLKAAwAA..i&w=800&h=800&client=safari&bih=1017&biw=1920&q=user%20blank%20icon&ved=0ahUKEwi2wM3QuYHoAhWjd98KHRcaCh0QMwhLKAAwAA&iact=mrc&uact=8"
const Consumer = firebaseContext

const Register = props => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpass, setRepeatpass] = useState("");
    
    const [restaurantName, setRestName] = useState("");
    const [restaurantAddress, setRestAddress] = useState("");
    
    const history = useHistory();

    return (
        <Consumer>
            {
                
                contextResult => {
                    const firebase = {
                        signUp: (email, password) => contextResult.firebaseAppAuth.createUserWithEmailAndPassword(email, password),
                        write: (user,uid) =>contextResult.firebaseDatabase.ref(`users/${uid}`).set(user)
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
                    const handlePhone = e => {
                        setPhone(e.target.value);
                    }
                    const handlePassword = e => {
                        setPassword(e.target.value);
                    }
                    const handleRepeatpass = e => {
                        setRepeatpass(e.target.value);
                    }


                    const handleRestaurantName = e =>{
                        setRestName(e.target.value);
                    }
                    const handleRestauranteAddress = e =>{
                        setRestAddress(e.target.value);
                    }
                
                    return(
                        <div className='register-restaurant'>
                            <Form>
                            <h4>Sobre el Host</h4>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control onChange={handleName}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridApellido">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control onChange={handleLastname}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>E-mail</Form.Label>
                                        <div>
                                            <Form.Control onChange={handleEmail} type='email'/>
                                        </div>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridTel">
                                    <Form.Label >Telefono</Form.Label>
                                    <Form.Control onChange={handlePhone}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control onChange={handlePassword} type='password'/>
                                </Form.Group>
                                
                                <Form.Group as={Col} controlId="formGridRepPassword">
                                        <Form.Label>Rep.Contraseña</Form.Label>
                                        <Form.Control onChange={handleRepeatpass} type='password'/>
                                </Form.Group>
                            </Form.Row>

                            <h4>Sobre el Restaurante</h4>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridRestaurant">
                                    <Form.Label>Nombre del Restaurante</Form.Label>
                                    <Form.Control onChange={handleRestaurantName}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress">
                                        <Form.Label>Direccion</Form.Label>
                                        <Form.Control onChange={handleRestauranteAddress}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} id="formGridFile">
                                    <Form.Label>Layout del Restaurante</Form.Label>
                                    <div class="custom-file">
                                    <input id="inputGroupFile02" type="file" multiple class="custom-file-input"/>
                                        <label class="custom-file-label" for="inputGroupFile01">Elija el archivo imagen</label>
                                    </div>
                                </Form.Group>
                            </Form.Row>


                                <Button darkmode click={ () => {
                                    
                                firebase.signUp(email,password)
                                    .then((result) => {
                                        console.log(result, result.user.uid)
                                        const uid = result.user.uid
                                        firebase.write({
                                            name,
                                            lastname,
                                            role: 'client',
                                            imgUrl
                                        },uid)
                                            .then(value => {
                                                console.log(value)
                                            })
                                            .catch(err => {
                                                console.log(err)
                                            });

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
                        </Form>    
                        </div>
                    )
                }
            }
        </Consumer>
    )
}
export default Register