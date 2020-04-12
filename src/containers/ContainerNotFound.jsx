import React from "react"
import '../assets/css/content-not-found.css'

import Button from "react-bootstrap/Button";


const PageNotFound = () => (
//Fragment
  <div className='content-not-found'>
        {/* Mensaje cuando llegue a página incorrecta */}
        {/* <img src="https://webstockreview.net/images/planet-clipart-el-espacio-16.png" alt="" width="400"/> */}
        <h2>Uy, llegaste a un mundo desconocido. Mejor regresa al <strong>tuyo</strong>.</h2>
        <div>
            <Button variant="outline-success" href="#home">ir a Inicio</Button>
        </div>
  </div>
)
export default PageNotFound