import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../assets/css/card-views.css'
import { useHistory } from "react-router-dom"
import { arrayFirebaseParser } from "../utils"
import * as firebase from 'firebase/app';
import 'firebase/database'




const ReservationCard = ({ dataList }) => {
    const { push: toLocation } = useHistory()
    const [restaurants, setRestaurant] = useState([])

    var information=[];
    
    const database = firebase.database()

    const toDetailsReservation = (reservationId) => () => {
        toLocation("/reservation-detail/" + reservationId)
    }

    useEffect(() => {
        for (let item of dataList) {
            console.log("iteracion")
            database.ref(`/restaurant/${item.restaurant_id}`).once("value")
                .then(snapShot => {
                    const val = snapShot.val()
                    setRestaurant([ ...restaurants, val ])
                })
                .catch(err => {
                    console.log(err)
                })
        }
        console.log(dataList, "aqui andamos")
    }) 

    return(
    <div className='card-views'>
        {
            restaurants.map((item, key) => (                 
                <Card 
                    key={key}
                    bg={"dark"}
                    text={'light'}
                    style={{ width: '18rem' }}
                >
                    <Card.Img variant="top" src={item.profileUrl}/>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle className="mb-2">{item.date}</Card.Subtitle>
                        <Button variant={item.button_variant} onClick={toDetailsReservation(item.uid)}>
                            {"Ver reservacion"}
                        </Button>
                        <Card.Link href={`#/${item.href}`}>{item.link}</Card.Link>
                    </Card.Body>
                </Card>
            ))
        }
    </div>
  );
}

export default ReservationCard;