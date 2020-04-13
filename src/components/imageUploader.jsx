import React, { useState, useEffect } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/storage'
import '../assets/css/register.css'
import Lodash from 'lodash';
import Alert from 'react-bootstrap/Alert'




const ImageUploader = ({ onChange, value, hasError, helperText }) => {

    const [imageAsFile, setImageAsFile] = useState(value);

    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(image)
    }
    useEffect(() => {
        onChange(imageAsFile)
      }, [imageAsFile])

    return (
        <>
        <div>
          <input
            type="file"
            multiple
            class="custom-file-input"
            onChange = {handleImageAsFile}
          />
          <label class="custom-file-label" for="inputGroupFile01">
            {Lodash.get(
              imageAsFile,
              ["name"],
              "Inserte una imagen"
            )}
          </label>
        </div>
         {hasError ? <Alert variant={'danger'}>
         {helperText}
       </Alert>:null}
       </>
    )
}
export default ImageUploader