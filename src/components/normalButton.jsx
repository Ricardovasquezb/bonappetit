import React from 'react';
import '../assets/css/normal-button.css';

const normalButton = props => {
    const mode = props.darkmode? "button-darkmode":"button-lightmode";
    //en caso de querer un boton con dark background se manda lo siguiente <Button darkmode/> en caso de querer un button blanco se invoca el button solamente
    return(
        <button className={`normal-button ${mode}`} onClick={props.click}> 
            {props.children}
        </button>
    )
}



export default normalButton