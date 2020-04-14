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

import { dateParser } from '../utils'

const Consumer = firebaseContext.Consumer

const MyReservations = props => {
    const [schedule, setSchedule] = useState("")
    const [table, setTable] = useState("");
    const [date, setDate] = useState(new Date());

    const history = useHistory();

    
    const dynamicHandler = (seter) => (value) => seter(value)

    const handleClick = () => {
        sweetalert({
            title: "¿Confirmar reserva?",
            text: "Si revisaste bien los datos de tu reserva puedes seguir",
            icon: "warning",
            buttons: ["Seguir viendo mi reserva",true],
            
          })
          .then((value) => {
              if(value){
                    const dateParsed = dateParser(date || new Date())
                    const tableKey = table.value
                    const scheduleKey = schedule.value
                    props.done({ table: tableKey, schedule: scheduleKey, date: dateParsed })
    
                
              }
              
          });
       
    }

    const options = [
        { value: 'Mañana', label: 'Mañana' },
        { value: 'Tarde', label: 'Tarde' },
        { value: 'Noche', label: 'Noche' },
    ];
    const mesas = props.listData.map((item, key) => ({
        
        value: item.uid,
        label: `Mesa ${key + 1} para un maximo de ${item.capacity} personas`
    }));
    const disabled = (schedule && table) ? false : true

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
                                value={date}
                                onChange={dynamicHandler(setDate)}
                            />

                            <Dropdown
                                value={schedule}
                                onChange={dynamicHandler(setSchedule)}
                                label="Seleccione el horario"
                                placeholder="Mañana, Tarde, ..."
                                options={options}
                            />
                            
                            <Dropdown
                                value={table}
                                onChange={dynamicHandler(setTable)}
                                label="Seleccione una mesa"
                                placeholder="Mesa 1, Mesa 2, ..."
                                options={mesas}
                            />

                            <Button 
                                disabled={disabled}
                                darkmode 
                                click={handleClick}
                            >
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