import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import '../assets/css/forgot-password.css'
import TextInput from '../components/TextInput'
import { useHistory } from "react-router-dom"
import Card from '../components/Card'
import Text from '../components/Text'
import sweetalert from 'sweetalert'
import * as firebase from 'firebase/app'
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Lodash from "lodash";
import Col from 'react-bootstrap/Col'
import {
    StyledInlineErrorMessage,
  } from "./styles";






const RegisterSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
});

const ForgotPassword = props => {


    const history = useHistory();

    const getFieldError = (listErrors, fieldName) => {
        return Lodash.get(listErrors, `${fieldName}`, null);
    }



    return (

        <Formik
            initialValues={{
                email: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={(fields) => {
                console.log(fields)
                sweetalert({
                    title: "¿Enviar correo de reseteo de contraseña?",
                    text: "Se te enviara un correo con un link que te permitira resetear tu contraseña",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then(() => {
                        firebase.auth().sendPasswordResetEmail(fields.email)
                            .then((result) => {
                                sweetalert("Se ha envidao un correo que te permitira cambiar tu contraseña a tu email", {
                                    icon: "success"
                                })
                                    .then(() => {
                                        history.replace("/login")
                                    });
                            })
                    })
                    .catch((e) => {
                        switch (e.code) {
                            case "auth/user-not-found":
                                sweetalert("Este correo no existe", { icon: "error" })
                                    .then(() => {
                                        history.replace("/forgot-password")
                                    })
                                break;
                            case "auth/invalid-email":
                                sweetalert("El formato del correo es incorrecto", { icon: "error" })
                                    .then(() => {
                                        history.replace("/forgot-password")
                                    })
                                break;

                            default:
                                break;
                        }

                    })
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isValid,
                isSubmitting,
                setFieldValue,
            }) => (
                    <div className='register-comensal'>
                        <Form>

                            <Form.Label>Ingrese su correo electrónico para poder comprobar su identidad</Form.Label>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="email"
                                    name="email"
                                    placeholder="Correo Electronico"
                                />
                                <ErrorMessage name="email">
                                    {(msg) => <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>}
                                </ErrorMessage>

                                {/* {errors.email !== null && touched.email ? <div className="error-message">
                                    {getFieldError(errors, "email")}
                                </div> : null} */}
                            </Form.Group>



                            <Button block variant='dark' type="submit" disabled={!isValid} onClick={handleSubmit}>
                                Recuperar Contraseña
                        </Button>
                        </Form>
                    </div>
                )}
        </Formik>



    )

}
export default ForgotPassword

