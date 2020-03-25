import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardView = props => {
    let color = props.color;
    
    return(
    <Card 
        bg={color.toLowerCase()}
        text={color.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.content}
            </Card.Text>
            <Button variant="primary">{props.ButtonLabel}</Button>
        </Card.Body>
    </Card>
  );
}

export default CardView;