import React, { useState } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/storage'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import '../assets/css/register.css'


const ImageUploader = props => {

    const allInputs = { imgUrl: '' }
    const [imageAsFile, setImageAsFile] = useState("");
    const [imageAsUrl, setImageAsUrl] = useState(allInputs);

    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        console.log(image)
        setImageAsFile(imageFile => (image))
    }


    return (
        <Form.Group as={Col} id="formGridFile">
            <div className="ImageUploader">
                <input id="inputGroupFile02" type="file" multiple class="custom-file-input" onChange={handleImageAsFile}/>
                <label class="custom-file-label" for="inputGroupFile01">Elija el archivo imagen</label>
            </div>
        </Form.Group>
    )
}
export default ImageUploader