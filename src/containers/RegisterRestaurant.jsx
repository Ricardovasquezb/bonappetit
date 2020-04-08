import React, { useState,useEffect } from 'react'
import { useHistory } from "react-router-dom"
import sweetalert from 'sweetalert'
import * as firebase from 'firebase/app'
import { v4 as uuidv4 } from 'uuid';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import '../assets/css/register.css'


//Components
import Button from '../components/normalButton'
import TextInput from "../components/TextInput"
import HCard from '../components/HCard'
import Card from '../components/Card'
import ImageUploader from '../components/imageUploader';

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

const layoutUrl = ["https://firebasestorage.googleapis.com/v0/b/project-bonappetit.appspot.com/o/layout.png?alt=media&token=61727348-35da-465c-a73d-d03219156d19",
    "https://firebasestorage.googleapis.com/v0/b/project-bonappetit.appspot.com/o/layout2.png?alt=media&token=55e5df15-da25-441b-8a8d-c40f08a83105",]


const imgUrl = ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.casadecampo.com.do%2Fdining%2Frestaurants%2F&psig=AOvVaw2EZeDSHVgZk7pDGvx90xrb&ust=1586407099026000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCx5ZGB2OgCFQAAAAAdAAAAABAD",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hardrockhotelpuntacana.com%2Frestaurants-and-delis.htm&psig=AOvVaw2EZeDSHVgZk7pDGvx90xrb&ust=1586407099026000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCx5ZGB2OgCFQAAAAAdAAAAABAN",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.timeout.com%2Fbarcelona%2Frestaurants%2Fa-restaurant&psig=AOvVaw2EZeDSHVgZk7pDGvx90xrb&ust=1586407099026000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCx5ZGB2OgCFQAAAAAdAAAAABAT",
    "https://www.casadecampo.com.do/wp-content/uploads/2019/01/sbg-marina-exterior-e1561479606442.jpg",
    "https://content.jdmagicbox.com/comp/visakhapatnam/x2/0891px891.x891.190325212248.u7x2/catalogue/the-oyster-continental-pedawaltair-visakhapatnam-restaurants-0afuqkvaam.jpg",
    "https://www.thesonicsboom.com/wp-content/uploads/2019/11/new-restaurant-June-2.jpg",
]


const tables = [
    {
        capacity: 4,
        floor: 1,
        number: 1
    },
    {
        capacity: 6,
        floor: 1,
        number: 2
    },
    {
        capacity: 2,
        floor: 1,
        number: 3
    },
    {
        capacity: 8,
        floor: 1,
        number: 4
    },
    {
        capacity: 4,
        floor: 1,
        number: 5
    },
    {
        capacity: 3,
        floor: 1,
        number: 6
    },
    {
        capacity: 4,
        floor: 1,
        number: 7
    },
]

shuffle(tables)
shuffle(imgUrl)
shuffle(layoutUrl)




const RegisterRestaurant = props => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpass, setRepeatpass] = useState("");
    const [restaurantName, setRestName] = useState("");
    const [direction, setDirection] = useState("");
    const [layoutImageFile, setLayoutImageFile] = useState("")
    const [profileImageFile, setProfileImageFile] = useState("")
    const [layoutImageUrl, setLayoutImageUrl] = useState("")
    const [profileImageUrl, setProfileImageUrl] = useState("")
    const history = useHistory();
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
    const handleRestaurantName = e => {
        setRestName(e.target.value);
    }
    const handleDirection = e => {
        setDirection(e.target.value);
    }
    const handleLayoutImageFile = e => {
        const image = e.target.files[0]
        setLayoutImageFile(image);
    }
    const handleProfileImageFile = e => {
        const image = e.target.files[0]
        setProfileImageFile(image);
    }

    console.log(layoutImageFile,profileImageFile)

    // const allInputs = { imgUrl: '' }
    // const [imageAsFile, setImageAsFile] = useState("");
    // const [imageAsUrl, setImageAsUrl] = useState(allInputs);
    const handleFireBaseUpload = (imageAsFile) => {
    //   console.log('start of upload')
      // async magic goes here...
      if(imageAsFile === '') {
        console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
      }
      const uploadTask = firebase.storage().ref(`/images/${imageAsFile.name}`).put(imageAsFile)
      uploadTask.on('state_changed', 
      (snapShot) => {
        // console.log(snapShot)
      }, (err) => {
        //catches the errors
        console.log(err)
      }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
       return firebase.storage().ref('images').child(imageAsFile.name).getDownloadURL()
      })
      }

    //   .then(fireBaseUrl => {
    //     console.log(fireBaseUrl)
    //     return fireBaseUrl
    // })
      const waitingUrls=() => {
        //   const url1 = handleFireBaseUpload(layoutImageFile)
        //   const url2 = handleFireBaseUpload(profileImageFile)
       
          
        Promise.all([handleFireBaseUpload(layoutImageFile), handleFireBaseUpload(profileImageFile)]).then(function(values){
            console.log(values)
        })


        //Promise.all(handleFireBaseUpload(layoutImageFile), handleFireBaseUpload(profileImageFile))
      }
    

    const handleSubmit =() => {
        // console.log([name,lastname,direction,phone,restaurantName,
        //                 "uid",
        //                 {
        //                     counter: 0,
        //                     totalrating: 0
        //                 },
        //                 0,
        //                 layoutImageFile,
        //                 tables,
        //                 profileImageFile])
       waitingUrls()
        // waitingUrls()
        // .then(result =>{
        //     console.log(result)

        // })
        
       


        // firebase.auth().createUserWithEmailAndPassword(email, password)
        //     .then((result) => {
        //         const uid = result.user.uid
        //         firebase.database().ref(`restaurants/`).push({
        //             direction,
        //             phone,
        //             name: restaurantName,
        //             host: uid,
        //             rating: {
        //                 counter: 0,
        //                 totalrating: 0
        //             },
        //             stars: 0,
        //             profileurl: imgUrl[0],
        //             tables,
        //             layouturl: layoutUrl[0]
        //         })
        //             .then(value => {
        //                 firebase.database().ref(`users/${uid}`).set({
        //                     name,
        //                     lastname,
        //                     role: "host"
        //                 })
        //                 console.log(value)
        //             })
        //             .catch(err => {
        //                 console.log(err)
        //             });
        //         result.user.sendEmailVerification()
        //             .then(() => {
        //                 sweetalert("Registro Exitoso!", "Se ha registrado exitosamente!", "success")
        //                     .then(() => {
        //                         history.push("/login")
        //                     })
        //             })
        //             .catch((e) => {
        //                 console.log(e)
        //             })

        //     })
        //     .catch((e) => {
        //         console.error(e)
        //         if (e.code === "auth/email-already-in-use") {
        //             sweetalert("Oops!", e.message, "error");
        //         }
        //         if (e.code === "auth/invalid-email") {
        //             sweetalert("Hey!", e.message, "error");
        //         }
        //         if (e.code === "auth/weak-password") {
        //             sweetalert("C'mon!", e.message, "warning");
        //         }
        //     });
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

                <Form.Row>
                    <Form.Group as={Col} id="formGridFile">
                        <Form.Label>Layout del Restaurante</Form.Label>
                        <div className="LayoutUploader">
                            <input id="inputGroupFile01" type="file" multiple class="custom-file-input" onChange={handleLayoutImageFile} />
                            <label class="custom-file-label" for="inputGroupFile01">Elija el archivo imagen</label>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} id="formGridFile2">
                        <Form.Label>Layout del Restaurante</Form.Label>
                        <div className="ImageUploader">
                            <input id="inputGroupFile02" type="file" multiple class="custom-file-input" onChange={handleProfileImageFile} />
                            <label class="custom-file-label" for="inputGroupFile02">Elija el archivo imagen</label>
                        </div>
                    </Form.Group>

                </Form.Row>


                <Button darkmode click={handleSubmit}>
                    Crear Cuenta</Button>
            </Form>
        </div>
    )


}
export default RegisterRestaurant