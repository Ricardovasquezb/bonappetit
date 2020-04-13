import React from "react";
import * as Yup from "yup";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom"
import { Form, Button } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import Lodash from "lodash";
import "../assets/css/register-restaurant-v2.css";
import * as firebase from 'firebase/app'
import sweetalert from 'sweetalert'
import Spinner from 'react-bootstrap/Spinner'
import {
  StyledInlineErrorMessage,
} from "./styles";



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

  const handleFireBaseUpload = async (imageAsFile, restaurantName) => {

    if (imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
    }
    const uploadTask = await firebase.storage().ref(`/images/${restaurantName}/${imageAsFile.name}`).put(imageAsFile)
    if (uploadTask.state === 'success') {

      return firebase.storage().ref('images').child(restaurantName).child(imageAsFile.name).getDownloadURL();
    }
  }

  const getImagesUrls = (name, file1, file2, ) => {
    return Promise.all([handleFireBaseUpload(file1, name), handleFireBaseUpload(file2, name)]);
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
        { console.log({ Values: fields }) }

        const restaurantImages = await getImagesUrls(fields.restaurantName, fields.layoutFile, fields.profileFile)

        firebase.auth().createUserWithEmailAndPassword(fields.email, fields.password)
          .then((result) => {

            const uid = result.user.uid
            firebase.database().ref(`restaurants/`).push({
              direction: fields.direction,
              phone: fields.phone,
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
                  name: fields.name,
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
                  {
                    errors.name && touched.name && (
                      <StyledInlineErrorMessage>{errors.name}</StyledInlineErrorMessage>
                    )}

                  {/* {errors.name !== null && touched.name ? <StyledInlineErrorMessage>
                     {getFieldError(errors, "name")}
                  </StyledInlineErrorMessage> : null} */}
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
                  {
                    errors.lastname && touched.lastname && (
                      <StyledInlineErrorMessage>{errors.lastname}</StyledInlineErrorMessage>
                    )}
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
                  {
                    errors.email && touched.email && (
                      <StyledInlineErrorMessage>{errors.email}</StyledInlineErrorMessage>
                    )}
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
                  {
                    errors.phone && touched.phone && (
                      <StyledInlineErrorMessage>{errors.phone}</StyledInlineErrorMessage>
                    )}
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
                  {
                    errors.password && touched.password && (
                      <StyledInlineErrorMessage>{errors.password}</StyledInlineErrorMessage>
                    )}
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
                  {
                    errors.repeatPassword && touched.repeatPassword && (
                      <StyledInlineErrorMessage>{errors.repeatPassword}</StyledInlineErrorMessage>
                    )}
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
                  {
                    errors.restaurantName && touched.restaurantName && (
                      <StyledInlineErrorMessage>{errors.restaurantName}</StyledInlineErrorMessage>
                    )}
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
                  {
                    errors.direction && touched.direction && (
                      <StyledInlineErrorMessage>{errors.direction}</StyledInlineErrorMessage>
                    )}
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
                  <FormikInput type={"imageUploader"} name={"layoutFile"} />
                </Form.Group>
                <Form.Group as={Col} id="formGridFile2">
                  <FormikInput type={"imageUploader"} name={"profileFile"} />
                </Form.Group>
              </Form.Row>

              <Button
                disabled={!isValid}
                variant="dark"
                type="submit"
                onClick={handleSubmit}
              >
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
};

export default RegisterRestaurantV2;
