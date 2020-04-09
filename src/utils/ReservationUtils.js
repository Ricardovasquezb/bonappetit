import Lodash from 'lodash';

const getReservationTableData = (listReservations) => {
  return listReservations.map(objReservation => ({
    img: "https://image.freepik.com/foto-gratis/personas-que-sonrie-alegre-hombres-guapos_1187-6057.jpg",
    Name: Lodash.get(objReservation, ['user', 'name'], ''),
    LastName: Lodash.get(objReservation, ['user', 'lastname'], ''),
    TableNumber: Lodash.get(objReservation, 'table', 0),
    hour: Lodash.get(objReservation, ['schedule'], ''),
    code: Lodash.get(objReservation, ['uid'], null),
  }))
}


export { getReservationTableData }