import React from 'react'
import "../assets/css/history-reservation-card.css"
import { Card, Button } from "react-bootstrap"

const { Body, Title, Subtitle, Img } = Card

const HistoryReservationCard = ({ src, title, subtitle, button, id }) => {

    const handleClick = () => {
        button.action(id)
    }

    return(
        <Card
            bg={"dark"}
            text={'light'}
            style={{ width: '18rem' }}
        >
            <Img variant="top" src={src} />
            <Body>
                <Title>{title}</Title>
                {
                    subtitle.map((value, key) => (
                        <Subtitle key={key}>{value}</Subtitle>
                    ))
                }
                <Button onClick={handleClick}>
                    {
                        button.content
                    }
                </Button>
            </Body>
        </Card>
    )
}

export default HistoryReservationCard