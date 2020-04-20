import Lodash from 'lodash';

const getReservationTableData = (listReservations) => {
  console.log(listReservations)
  return listReservations.map(objReservation => ({
    img: Lodash.get(objReservation, ['user', 'photoURL'], "https://weareunlimited.org.uk/wp-content/uploads/2017/11/default-profile.jpg"),
    Name: Lodash.get(objReservation, ['user', 'name'], ''),
    LastName: Lodash.get(objReservation, ['user', 'lastname'], ''),
    TableNumber: Lodash.get(objReservation, 'table', 0),
    hour: Lodash.get(objReservation, ['schedule'], ''),
    code: Lodash.get(objReservation, ['uid'], null),
    active: objReservation.active,
    done: objReservation.done

  }))
}


export { getReservationTableData }