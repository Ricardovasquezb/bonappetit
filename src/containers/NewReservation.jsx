import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import firebaseContext from "../hooks/firebaseContext"
import sweetalert from 'sweetalert'

import '../assets/css/new-reservation.css'

import Button from '../components/normalButton'
import TextInput from "../components/TextInput"
import Card from '../components/Card'
import DateTimePicker from '../components/DateTimePicker'
import Time_Picker from '../components/TimePicker'


const imgUrl ="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.svgrepo.com%2Fshow%2F164688%2Fblank-user.svg&imgrefurl=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F164688%2Fblank-user&docid=4qsao-ll0DDAXM&tbnid=5F-Xyl9A83DepM%3A&vet=10ahUKEwi2wM3QuYHoAhWjd98KHRcaCh0QMwhLKAAwAA..i&w=800&h=800&client=safari&bih=1017&biw=1920&q=user%20blank%20icon&ved=0ahUKEwi2wM3QuYHoAhWjd98KHRcaCh0QMwhLKAAwAA&iact=mrc&uact=8"
const Consumer = firebaseContext

const MyReservations = props => {
    const [cantidad, setCantidad] = useState("");
    const [fecha, setFecha] = useState("");
    const [horaLlegada, setHoraLlegada] = useState("");
    const [horaSalida, setHoraSalida] = useState("");
    
    const handleFecha = e => {
        setFecha(e.target.value);
    }
    const handleHoraLlegada = e => {
        setHoraLlegada(e.target.value);
    }
    const handleHoraSalida = e => {
        setHoraSalida(e.target.value);
    }

    const history = useHistory();

    return (
        <Consumer>
            {
                contextResult => {
                                      
                    return(
                        <Card mode={"darkmode-register"}>
                            <TextInput
                                label="Cantidad de personas"
                            />
                            <DateTimePicker
                                label="Fecha de inicio"
                                minDate = {0}
                                maxDate = {4}
                                onChange={handleFecha}
                            />
                            <div className='time-picker-row'>
                                <Time_Picker
                                    label="Hora de llegada"
                                    onChange={handleHoraLlegada}
                                    />
                                
                                <Time_Picker
                                    label="Hora de salida"
                                    onChange={handleHoraSalida}
                                />
                            </div>
                            <Button darkmode>
                                Reservar
                            </Button>
                        </Card>
                    )
                }
            }
        </Consumer>
    )
}
export default MyReservations