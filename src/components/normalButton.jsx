import React from 'react';
import '../assets/css/normal-button.css';
import Button from 'react-bootstrap/Button'


// primary
// secondary
// success
// warning
// danger
// light
// link

// outline-primary
// outline-secondary
// outline-success
// outline-warning
// outline-danger
// outline-light
// outline-link

const NormalButton = props => {
    const mode = props.darkmode? "button-darkmode":"button-lightmode";
    //en caso de querer un boton con dark background se manda lo siguiente <Button darkmode/> en caso de querer un button blanco se invoca el button solamente
    return(
        <Button 
            data-testid="button-for-test"
            variant={props.variant} className={`normal-button ${mode}`} onClick={props.click}
        > 
            {props.children}
        </Button>
    )
}



export default NormalButton