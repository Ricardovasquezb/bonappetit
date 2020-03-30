import React, {useState, Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../assets/css/card-views.css'


const CardView = props => {

//   variant:
//              Primary
//              Secondary
//              Success
//              Danger
//              Warning
//              Info
//              Light
//              Dark


//   mb-2 text-muted 
//   mb-2 text-white 
//   mb-2 text
//   mb-2
    
    var primary = '007bff';
    var secundary = '6c757d';
    var success = '28a745';
    var sanger = 'dc3545';
    var warning = 'ffc107';
    var info = '17a2b8';
    var light = 'f8f9fa';
    var dark = '343a40';

    let color = props.color;
    var Data = [];

    // var alt = 'http://www.singlecolorimage.com/get/6c757d/200x10';

    Data = props.values;
    return(
    <div className='card-views'>
    {
        Data.map((item) => (   
            
            <Card 
                bg={item.color.toLowerCase()}
                text={item.color.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.src} alt={item.src}/>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2">{item.subtitle}</Card.Subtitle>
                    <Card.Text>
                        {item.content}
                    </Card.Text>
                    <Button variant={item.button_variant} onClick={item.click}>{item.ButtonLabel}</Button>
                    <Card.Link href={`#/${item.href}`}>{item.link}</Card.Link>
                </Card.Body>
            </Card>
        ))
    }
    </div>
  );
}

export default CardView;