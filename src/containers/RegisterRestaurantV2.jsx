import React from "react";
import * as Yup from "yup";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom"
import { Form, Button } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import Lodash from "lodash";
import "../assets/css/register-restaurant-v2.css";

import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormRow from "react-bootstrap/Form";
import TablesInput from "../components/TablesInput";
import * as firebase from 'firebase/app'
import sweetalert from 'sweetalert'


import FormikInput from "../components/Formik";

const phoneRegExp = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;

const passwordRegExp = /^(?=.*\d).{8,15}$/;

const mapToKey = (lists) => {
  return lists.reduce((accVal, curVal) => {
      const name = Lodash.get(curVal, ['name'], 'name');
      return { ...accVal, [name]: curVal };
  }, {})
};


const RegisterSchema = Yup.object().shape({
  tables: Yup.array().min(1, "Se nececita al menos una mesa"),
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

const RegisterRestaurantV2 = (props) => {
  const getFieldError = (listErrors, fieldName) => {
    return Lodash.get(listErrors, `${fieldName}`, null);
  }
  const history = useHistory();

  const handleFireBaseUpload = async (imageAsFile,restaurantName) => {

    if (imageAsFile === '') {
        console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
    }
    const uploadTask = await firebase.storage().ref(`/images/${restaurantName}/${imageAsFile.name}`).put(imageAsFile)
    if (uploadTask.state === 'success') {
  
        return firebase.storage().ref('images').child(restaurantName).child(imageAsFile.name).getDownloadURL();
    }
  }
  
  const getImagesUrls = (name,file1,file2,) => {
    return Promise.all([handleFireBaseUpload(file1,name), handleFireBaseUpload(file2,name)]);
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
        restaurantName: "",
        direction: "",
        tables: [],
        layoutFile: null,
        profileFile: null,
      }}
      validationSchema={RegisterSchema}
      onSubmit={async (fields) => {
        {console.log({ Values:fields})}

        const restaurantImages = await getImagesUrls(fields.restaurantName,fields.layoutFile,fields.profileFile)

        firebase.auth().createUserWithEmailAndPassword(fields.email, fields.password)
            .then((result) => {

                const uid = result.user.uid
                firebase.database().ref(`restaurants/`).push({
                    direction:fields.direction,
                    phone:fields.phone,
                    name: fields.restaurantName,
                    host: uid,
                    rating: {
                        counter: 0,
                        totalrating: 0
                    },
                    stars: 0,
                    profileurl: restaurantImages[1],
                    tables: mapToKey(fields.tables),
                    layouturl: restaurantImages[0],
                    pending: true,
                    approved: false,
                })
                    .then(value => {
                        console.log('SE CREO')
                        firebase.database().ref(`users/${uid}`).set({
                            name:fields.name,
                            lastname: fields.lastname,
                            role: "host"
                        })
                        console.log(value)
                    })
                    .catch(err => {
                        console.log(err)
                    });
                result.user.sendEmailVerification()
                    .then(() => {
                        sweetalert("Registro Exitoso!", "Se ha registrado exitosamente!", "success")
                            .then(() => {
                                history.push("/login")
                            })
                    })
                    .catch((e) => {
                        console.log(e)
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
        <div className="register-restaurant">
          <Form>

            <h4>Sobre el Host</h4>
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
                {errors.name!==null && touched.name  ?  <div className="error-message">
                  {getFieldError(errors, "name")}
                </div> :  null}
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
                {errors.lastname!==null && touched.lastname  ?  <div className="error-message">
                  {getFieldError(errors, "lastname")}
                </div> :  null}
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
                  {errors.email!==null && touched.email  ?  <div className="error-message">
                  {getFieldError(errors, "email")}
                </div> :  null}
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
                {errors.phone!==null && touched.phone  ?  <div className="error-message">
                  {getFieldError(errors, "phone")}
                </div> :  null}
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
                {errors.password!==null && touched.password  ?  <div className="error-message">
                  {getFieldError(errors, "password")}
                </div> :  null}
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
                {errors.repeatPassword!==null && touched.repeatPassword  ?  <div className="error-message">
                  {getFieldError(errors, "repeatPassword")}
                </div> :  null}
              </Form.Group>
            </Form.Row>

            <h4>Sobre el Restaurante</h4>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridRestaurant">
                <Form.Label>Nombre del Restaurante</Form.Label>
                <Form.Control
                  value={values.restaurantName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="restaurantName"
                  placeholder="Nombre del Restaurante"
                />
                {errors.restaurantName!==null && touched.restaurantName  ?  <div className="error-message">
                  {getFieldError(errors, "restaurantName")}
                </div> :  null}
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label>Direccion</Form.Label>
                <Form.Control
                  value={values.direction}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="direction"
                  placeholder="Direccion"
                />
                 {errors.direction!==null && touched.direction  ?  <div className="error-message">
                  {getFieldError(errors, "direction")}
                </div> :  null}
              </Form.Group>
            </Form.Row>
            <FormikInput type={"tablesInput"} name={"tables"} />
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
                <FormikInput type = {"imageUploader"} name={"layoutFile"}/>
              </Form.Group>
              <Form.Group as={Col} id="formGridFile2">
              <FormikInput type = {"imageUploader"} name={"profileFile"}/>
              </Form.Group>
            </Form.Row>

            <Button
              disabled={!isValid}
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Crear Cuenta
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterRestaurantV2;
