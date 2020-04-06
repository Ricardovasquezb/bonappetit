import React from 'react'
import '../assets/css/settings.css'

import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import bsCustomFileInput from 'bs-custom-file-input'

const Settings = props => {
    
    var User = props.user;
    return(
    <div className='general'>

        <h2>DATOS DEL USUARIO</h2>
      <div className='settings'>
            <Form>
            
                <Form.Group  controlId="formGridName">
                    <Form.Label>Nombre</Form.Label>
                    <div>
                        <Form.Control readOnly defaultValue={User.name}/>
                    </div>
                </Form.Group>
                
                <Form.Group  controlId="formGridLastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control readOnly defaultValue={User.lastname}/>
                </Form.Group>
            
                
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Ex.: john@mail.com" type="email" defaultValue={User.email}/>
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control placeholder="Ex.: +1 (809) 123 4567" defaultValue={User.tel}/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridImgProfile">
                        <Form.Label>Imagen de Perfil</Form.Label>
                        
                        <div class="custom-file">
                            <input id="inputGroupFile01" type="file" class="custom-file-input"/>
                            <label class="custom-file-label" for="inputGroupFile01">Elija un archivo .png .jpg.jpeg</label>
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