import React, {useState, useEffect} from 'react'
import Lodash from 'lodash';
import Button from 'react-bootstrap/Button'

import '../assets/css/all-reservations-host.css'

import TableView from '../components/TableView'
import DateTimePicker from '../components/DateTimePicker'
import { dateParser, getReservationTableData, arrayFirebaseParser } from '../utils';
import * as firebase from 'firebase/app'

const getAllReservations = async (restaurantId) => {
  const ref = firebase.database().ref("/reservations/");

  const snapShot = await ref.orderByChild("restaurant_id").equalTo(restaurantId).once("value");
  return snapShot.val()
};
const filterReservationsByDay = (reservations, date) => {
  if(!Lodash.isNil(date)){
    return reservations.filter(reservation => {
      return reservation.date === dateParser(date)
    })
  }
  
  return reservations;
};


const  TABLE_HEADER = [
  {
    'title': 'No.'
  },
  {
    'title': 'Nombre'
  },
  {
    'title': 'Mesa'
  },
  {
    'title': 'Horario'
  },
  {
    'title': 'Código'
  },
  {
    'title': ''
  }
];

const AllReservations = props =>{

    const [dateSelected, setDate] = useState(null);
    const [restId, setRestId] = useState(null);
    const [reservations, setReservations] = useState([]);
    const [tableDate, setTableData] = useState([])

    const handleDate = e => {
      return setDate(e);
    }

  const gettingrestaurantData = (async () => {

    const uid = localStorage.getItem("user")
    const role = localStorage.getItem("role")

    if (role === 'host') {
      const Data = await firebase.database().ref(`/restaurants/`).orderByChild("host").equalTo(uid).once("value")

      return setRestId(Object.keys(Data.val())[0])

    }
  });

  const loadReservations = (restId) => {
    getAllReservations(restId)
      .then(values => {
       return setReservations(arrayFirebaseParser(values));
      })
      .catch(objError=>console.log({ERROR: objError}));
  }

  const refreshData = () => {
    loadReservations(restId)
  }

  const getReservations = () => {
    return getReservationTableData(filterReservationsByDay(reservations, dateSelected));
  };

  useEffect(() => {
    gettingrestaurantData()
  }, []);

  useEffect(() => {
    loadReservations(restId)
  }, [restId])

    return(
        <div className='all-reservations-host'>
            <h2>RESERVACIONES</h2>
            <h4>Seleccione una fecha para filtrar</h4>
            <div className="picker">
                <DateTimePicker
                    onChange={handleDate}
                    value={dateSelected}
                />
          {dateSelected ? <Button onClick={() => setDate(null)}>
            {"Limpiar filtro"}
          </Button>: null} 
            </div>
            
        <TableView activeEvent={refreshData} titles={TABLE_HEADER} values={getReservations()}/>
        </div>
    );
}

export default AllReservations