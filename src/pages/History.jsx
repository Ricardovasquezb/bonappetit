import React, { useState, useEffect } from "react"
import { Container } from 'react-bootstrap'
import ReservationCard from "../components/HistoryReservationCard"

import { searchExpireReservations } from "../utils"


const History = props => {
    const [expireReservations, setExpireReservations] = useState([]);
    const [modalData, setModalData] = useState({
        isOpen: false,
        reservationId: ""
    })

    const cardClickEvent = (reservationId = "") =>  {
        setModalData({
            isOpen: !modalData.isOpen,
            reservationId
        })
    }

    const refreshData = (middleware = data => data) => {
        searchExpireReservations("MrppNXFa5wfWPh7c28xAO2P6PaK2")
            .then(data => {
                setExpireReservations(middleware(data))
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    const dataToCardConverter = (data) => {
        return data.map(({ restaurantImg, restaurantName, reservationId }) => ({
            src: restaurantImg,
            title: restaurantName,
            id: reservationId,
            subtitle: [],
            button: {
                action: cardClickEvent,
                content: "Calificar"
            }
        }))
    }

    useEffect(() => {
        refreshData(dataToCardConverter)
    }, [])


    return (
        <Container>
            {
                expireReservations.map((value, key) => <ReservationCard {...value} key={key} />)
            }
        </Container>
    )
}

export default History