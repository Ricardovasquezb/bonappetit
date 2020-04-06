import React from 'react'
import '../assets/css/settings.css'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import bsCustomFileInput from 'bs-custom-file-input'


const Settings = props => {

    var User = props.user;

    return(
        <div className='general'>
            <h2>DATOS DEL RESTAURANTE</h2>
            <div className='settings'>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre del Restaurant</Form.Label>
                        <Form.Control readOnly defaultValue={User.name}/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control placeholder="1234 Main St" defaultValue={User.address}/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col}controlId="formGridAddress2">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control placeholder="809 123 4567" defaultValue={User.tel}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control placeholder="Santo Domingo" defaultValue={User.city}/>
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


                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        </div>
    </div>
    );
}

export default Settings;