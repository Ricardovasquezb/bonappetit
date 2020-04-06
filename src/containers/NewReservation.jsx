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
import Dropdown from '../components/PickerSelect'

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

    const options = [
        { value: 'Mañana', label: 'Mañana' },
        { value: 'Tarde', label: 'Tarde' },
        { value: 'Noche', label: 'Noche' },
    ];

    const mesas = [
        { value: '1', label: 'Mesa 1' },
        { value: '2', label: 'Mesa 2' },
        { value: '3', label: 'Mesa 3' },
        { value: '4', label: 'Mesa 4' },
        { value: '5', label: 'Mesa 5' },
        { value: '6', label: 'Mesa 6' },
        { value: '7', label: 'Mesa 7' },
        { value: '8', label: 'Mesa 8' },
        { value: '9', label: 'Mesa 9' },
        { value: '10', label: 'Terraza 1' },
        { value: '11', label: 'Terraza 2' },
        { value: '12', label: 'Terraza 3' },
        
    ];
    
    return (
        <Consumer>
            {
                contextResult => {
                                      
                    return(
                        <Card mode={"darkmode-register"}>
                            <DateTimePicker
                                label="Fecha de inicio"
                                minDate = {0}
                                maxDate = {4}
                                onChange={handleFecha}
                            />

                            <Dropdown
                                label="Seleccione el horario"
                                placeholder="Mañana, Tarde, ..."
                                options={options}
                            />
                            
                            <Dropdown
                                label="Seleccione una mesa"
                                placeholder="Mesa 1, Mesa 2, ..."
                                options={mesas}
                            />

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