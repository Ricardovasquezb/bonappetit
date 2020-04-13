import React, { useState, useEffect } from "react"
import { Container, Modal, Button } from 'react-bootstrap'
import ReservationCard from "../components/HistoryReservationCard"
import Layout from "../components/LayoutType1"
import CalificationInput from "../components/CalificationInput"
import * as firebase from 'firebase/app'
import 'firebase/database'

import { searchExpireReservations } from "../utils"

const { Header, Title, Body, Footer } = Modal

const History = props => {
    const [expireReservations, setExpireReservations] = useState([]);
    const [calification, setCalification] = useState([]);
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
        return data.map(({ restaurantImg, restaurantName, uid }) => ({
            src: restaurantImg,
            title: restaurantName,
            id: uid,
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

    const handleSetCalification = async () => {
        await firebase.database().ref(`/reservations/${modalData.reservationId}`).update({
            punctuation: calification,
            rated: true
        })
        setModalData({
            isOpen: false,
            reservationId: ""
        })
    }
    return (
        <div className='my-reservations'>
            <h2>Historial de Reservaciones</h2>
            <div className='cards'></div>
        <Container >
            {
                expireReservations.map((value, key) => <ReservationCard {...value} key={key} />)
            }
            <Modal show={modalData.isOpen}>
                <Header>
                    <Title>Coloca tu calificación</Title>
                </Header>
                <Body>
                    <CalificationInput calificationEvent={(val) => setCalification(val)} maxScore={5} />
                </Body>
                <Footer>
                    <Button onClick={handleSetCalification}>
                        Listo
                    </Button>
                </Footer>
            </Modal>
        </Container>
        </div>
        
    )
}

export default History