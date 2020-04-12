import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import sweetalert from 'sweetalert'
import * as firebase from 'firebase/app'
import { v4 as uuidv4 } from 'uuid';
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'
import Col from 'react-bootstrap/Col'
import '../assets/css/register.css'
import Lodash from 'lodash';
import validator from 'validator'
import Formik from 'formik'

//Components
import Button from '../components/normalButton'
import TextInput from "../components/TextInput"
import HCard from '../components/HCard'
import Card from '../components/Card'
import ImageUploader from '../components/imageUploader';
import TablesInput from '../components/TablesInput'




const mapToKey = (lists) => {
    return lists.reduce((accVal, curVal) => {
        const name = Lodash.get(curVal, ['name'], 'name');
        return { ...accVal, [name]: curVal };
    }, {})
};



const RegisterRestaurant = props => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpass, setRepeatpass] = useState("");
    const [restaurantName, setRestName] = useState("");
    const [direction, setDirection] = useState("");
    const [layoutImageFile, setLayoutImageFile] = useState("")
    const [profileImageFile, setProfileImageFile] = useState("")
    const [layoutLabel, setLayoutLabel] = useState("Agrega el layout de su Restaurante")
    const [profileLabel, setProfileLabel] = useState("Agrega la foto de perfil de su Restaurante")
    const [tables, setTables] = useState(1);
    const [validForm,setValidForm] = useState(false)

    const history = useHistory();
    const handleName = e => {
        setName(e.target.value);
    }
    const handleLastname = e => {
        setLastname(e.target.value);
    }
    const handleEmail = e => {
        setEmailValid(validator.isEmail(e.target.value))
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
    const handleRestaurantName = e => {
        setRestName(e.target.value);
    }
    const handleDirection = e => {
        setDirection(e.target.value);
    }
    const handleLayoutImageFile = e => {
        const image = e.target.files[0]
        setLayoutImageFile(image);
        setLayoutLabel(image.name)
    }
    const handleProfileImageFile = e => {
        const image = e.target.files[0]
        setProfileImageFile(image);
        setProfileLabel(image.name)

    }
    const handleValidForm = e =>{

    }


    const handleFireBaseUpload = async (imageAsFile) => {

        if (imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
        }
        const uploadTask = await firebase.storage().ref(`/images/${imageAsFile.name}`).put(imageAsFile)
        if (uploadTask.state === 'success') {

            return firebase.storage().ref('images').child(imageAsFile.name).getDownloadURL();
        }
    }

    const getImagesUrls = () => {
        return Promise.all([handleFireBaseUpload(layoutImageFile), handleFireBaseUpload(profileImageFile)]);
    }

    const handleSubmit = async () => {

        const validForm = await handleValidForm()
        if(validForm){
            setValidForm(true)
           
        }else{
            
        }
        
    }

    const handleOnTableChange = (tables) => {
        return setTables(tables)
    }




    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    return (
        <div className='register-restaurant'>
            <Form>
                <h4>Sobre el Host</h4>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control onChange={handleName} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridApellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control onChange={handleLastname} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>E-mail</Form.Label>
                        <div>
                            <Form.Control onChange={handleEmail} type='email' />
                        </div>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridTel">
                        <Form.Label >Telefono</Form.Label>
                        <Form.Control onChange={handlePhone} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control onChange={handlePassword} type='password' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridRepPassword">
                        <Form.Label>Rep.Contraseña</Form.Label>
                        <Form.Control onChange={handleRepeatpass} type='password' />
                    </Form.Group>
                </Form.Row>

                <h4>Sobre el Restaurante</h4>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridRestaurant">
                        <Form.Label>Nombre del Restaurante</Form.Label>
                        <Form.Control onChange={handleRestaurantName} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridAddress">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control onChange={handleDirection} />
                    </Form.Group>
                </Form.Row>
                <TablesInput onChange={handleOnTableChange} />
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Layout del Restaurante</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Perfil del Restaurante</Form.Label>
                    </Form.Group>

                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} id="formGridFile">
                        <div className="LayoutUploader">
                            <input id="inputGroupFile01" type="file" multiple class="custom-file-input" onChange={handleLayoutImageFile} />
                            <label class="custom-file-label" for="inputGroupFile01">{layoutLabel}</label>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} id="formGridFile2">
                        <div className="ImageUploader">
                            <input id="inputGroupFile02" type="file" multiple class="custom-file-input" onChange={handleProfileImageFile} />
                            <label class="custom-file-label" for="inputGroupFile02">{profileLabel}</label>
                        </div>
                    </Form.Group>

                </Form.Row>

                <Button darkmode click={handleSubmit} variant="secundary" disabled={!validForm}>
                    Crear Cuenta</Button>
            </Form>
        </div>
    )


}
export default RegisterRestaurant