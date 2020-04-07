import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../assets/css/card-views.css'

//Loader
import { ReservationCardLoader } from './Loaders';

const ReservationCard = ({ dataList, isLoading, onClick }) => {
    return(
    <div className='card-views'>
        {isLoading ? (
          [...Array(4)].map(() => {
            return <ReservationCardLoader/>;
          })
        ) : (dataList.map((item, key) => (
          <Card
            key={key}
            bg={"dark"}
            text={'light'}
            style={{ width: '18rem' }}
          >
            <Card.Img variant="top" src={item.restaurant.profileurl} />
            <Card.Body>
              <Card.Title>Restaurante: {item.restaurant.name}</Card.Title>
              <Card.Subtitle className="mb-2">{item.date}</Card.Subtitle>
              <Card.Subtitle className="mb-2">Horario: {item.schedule}</Card.Subtitle>
              <Button variant={item.button_variant} onClick={() => onClick(item)}>
                {"Ver reservacion"}
              </Button>
              <Card.Link href={`#/${item.href}`}>{item.link}</Card.Link>
            </Card.Body>
          </Card>
        )))
         
        }
    </div>
  );
}

export default ReservationCard;