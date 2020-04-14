import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import sweetalert from 'sweetalert'
import * as firebase from 'firebase/app'
import { Formik, ErrorMessage } from "formik";
import { Form, Button } from "react-bootstrap";
import '../assets/css/register.css'
import * as Yup from "yup";
import Col from 'react-bootstrap/Col'
import FormikInput from "../components/Formik";
import Lodash from "lodash";
import Spinner from 'react-bootstrap/Spinner'
import {
    StyledInlineErrorMessage,
  } from "./styles";



const phoneRegExp = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;

const passwordRegExp = /^(?=.*\d).{8,15}$/;

const defaultImg = "https://weareunlimited.org.uk/wp-content/uploads/2017/11/default-profile.jpg"
const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .max(40, "Please enter no more than 40 characters")
        .required("Please enter your  name"),

    lastname: Yup.string()
        .max(40, "Please enter no more than 40 characters")
        .required("Please enter a last name"),
    email: Yup.string().email("Email is invalid").required("Email is required"),

    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),

    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(passwordRegExp, "invalid Password")
        .required("Password is required"),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
});

const Register = (props) => {

    const getFieldError = (listErrors, fieldName) => {
        return Lodash.get(listErrors, `${fieldName}`, null);
    }
    const history = useHistory();

    const handleFireBaseUpload = async (imageAsFile, uid) => {

        if (imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
        }
        const uploadTask = await firebase.storage().ref(`/images/${uid}/${imageAsFile.name}`).put(imageAsFile)
        if (uploadTask.state === 'success') {

            return firebase.storage().ref('images').child(uid).child(imageAsFile.name).getDownloadURL();
        }
    }

    const getImagesUrls = (name, file1) => {
        return Promise.all([handleFireBaseUpload(file1, name)]);
    }


    return (

        <Formik
            initialValues={{
                name: "",
                lastname: "",
                email: "",
                phone: "",
                password: "",
                repeatPassword: "",
                profileFile: null,
            }}
            validationSchema={RegisterSchema}
            onSubmit={(fields) => {
                firebase.auth().createUserWithEmailAndPassword(fields.email, fields.password)
                    .then(async (result) => {
                        const user = firebase.auth().currentUser;
                        const imgUrl = (fields.profileFile !== null ? await getImagesUrls(result.user.uid, fields.profileFile) : [defaultImg])
                        firebase.database().ref(`users/${result.user.uid}`).set({
                            name: fields.name,
                            lastname: fields.lastname,
                            role: 'client',
                            photoURL: imgUrl[0],

                        })
                            .then(value => {
                                user.updateProfile({
                                    displayName: fields.name,
                                    phoneNumber: fields.phone,
                                    photoURL: imgUrl[0],
                                })
                            })
                            .catch(err => {
                            });

                        user.sendEmailVerification()
                            .then(() => {
                                sweetalert("Registro Exitoso!", "Se ha registrado exitosamente!", "success")
                                    .then(() => {
                                        history.push("/login")
                                    })
                            })
                            .catch(() => {

                            })

                    })
                    .catch((e) => {
                        console.error(e)
                        if (e.code === "auth/email-already-in-use") {
                            sweetalert("Oops!", e.message, "error");
                        }
                        if (e.code === "auth/invalid-email") {
                            sweetalert("Hey!", e.message, "error");
                        }
                        if (e.code === "auth/weak-password") {
                            sweetalert("C'mon!", e.message, "warning");
                        }
                    });


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
                            <Form.Row>
                                <Form.Group as={Col} controlId="formname">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="text"
                                        name="name"
                                        placeholder="Nombre"
                                    />
                                    {errors.name != null && touched.name ? <StyledInlineErrorMessage>

                                        {getFieldError(errors, "name")}
                                    </StyledInlineErrorMessage>
                                     : null}
                                </Form.Group>

                                <Form.Group as={Col} controlId="formlastname">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control
                                        value={values.lastname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="text"
                                        name="lastname"
                                        placeholder="Apellido"
                                    />
                                    {errors.lastname != null && touched.lastname ? <StyledInlineErrorMessage>

                                        {getFieldError(errors, "lastname")}
                                    </StyledInlineErrorMessage>
                                     : null}
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
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
                                    {errors.email != null && touched.email ? <StyledInlineErrorMessage>

                                        {getFieldError(errors, "email")}
                                    </StyledInlineErrorMessage>
                                     : null}
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridTel">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="text"
                                        name="phone"
                                        placeholder="Telefono"
                                    />
                                    {errors.phone != null && touched.phone ? <StyledInlineErrorMessage>

                                        {getFieldError(errors, "phone")}
                                    </StyledInlineErrorMessage>
                                     : null}
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="password"
                                        name="password"
                                        placeholder="Contraseña"
                                    />
                                    {errors.password != null && touched.password ? <StyledInlineErrorMessage>

                                        {getFieldError(errors, "password")}
                                    </StyledInlineErrorMessage>
                                     : null}
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridRepPassword">
                                    <Form.Label>Rep.Contraseña</Form.Label>
                                    <Form.Control
                                        value={values.repeatPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type="password"
                                        name="repeatPassword"
                                        placeholder="Rep.Contraseña"
                                    />
                                    {errors.repeatPassword != null && touched.repeatPassword ? <StyledInlineErrorMessage>

                                        {getFieldError(errors, "repeatPassword")}
                                    </StyledInlineErrorMessage>
                                     : null}
                                </Form.Group>
                            </Form.Row>

                            <Form.Group as={Col}>
                                <Form.Label>Imagen de Perfil</Form.Label>

                            </Form.Group>
                            <Form.Row>

                                <Form.Group as={Col} id="formGridFile">
                                    <FormikInput type={"imageUploader"} name={"profileFile"} />

                                </Form.Group>
                            </Form.Row>

                            <Button variant='dark' type="submit" disabled={!isValid} onClick={handleSubmit}>
                                {isSubmitting ? <><Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />  Cargando...</>
                                    : "Crear Cuenta"}
                            </Button>
                        </Form>
                    </div>
                )}
        </Formik>
    );

}
export default Register