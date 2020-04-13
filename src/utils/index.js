import * as firebase from 'firebase/app'
import 'firebase/database'
import Moment from 'moment';
import { getReservationTableData } from './ReservationUtils';
import { normalize, schema } from "normalizr";
import Lodash from 'lodash';

const normalizeRestaurantData = (restaurants) => {
  const restaurantsSchema = new schema.Entity(
    "restaurants",
    {},
    { idAttribute: "uid" }
  );
  const listRestaurants = new schema.Array(restaurantsSchema);
  return normalize(restaurants, listRestaurants);
};

export const arrayFirebaseParser = (firebaseArray) => {
    const keys = Object.keys(firebaseArray)
  // console.log({ keys, firebaseArray})
    let result = []

    for (let key of keys) {
        const item = {
            ...firebaseArray[key],
            uid: key
        }
        result.push(item)
    }
    return result
}
export const dateParser = (date) => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
export const averageByKyStrict = (items, key, rounded = true) => {
    let len = 0,
        total = 0;

    for (let item of items) {
        if (item[key]) {
            ++len
            total += item[key]
        }
    }
    const average = total / (len || 1)

    return rounded ? Math.round(average) : average
}
export const getFirstQuantity = (quantity, items) => {
    let result = []
    for (let i = 0; i < quantity; ++i) {
        result.push(items[i])
    }
    return result
}
export const uniqueItemsFromKey = (items, key) => {
    let uniqueValues = []

    for (let item of items) {
        const val = item[key]
        const isFound = uniqueValues.find(toFind => toFind === val)
        if (!isFound) uniqueValues.push(val)
    }
    
    return uniqueValues
}

export const getAllRestaurant = () => {
  return firebase.database()
    .ref("/restaurants")
    .once("value")
    .then((snapShot) => {
      const val = snapShot.val();
      const dataParsed = arrayFirebaseParser(val);
      const normalizedRestaurants = normalizeRestaurantData(dataParsed);
      const listRestaurantsIds = Lodash.get(normalizedRestaurants, ['result'], []);
      const restaurantLookup = Lodash.get(normalizedRestaurants, ['entities', 'restaurants'], {});

      return {listRestaurantsIds, restaurantLookup}
    })
    .catch((e) => {
      console.error(e);
    });
};

export const searchExpireReservations = async (userId) => {
    try {
        const dataSnapShot = await firebase.database().ref("/reservations/").orderByChild("user_uid").equalTo(userId).once("value")
        const dataVal = dataSnapShot.val()
        const allRestaurants = await getAllRestaurant();
        const { restaurantLookup } = allRestaurants;
        const oldReservations = Lodash.filter(arrayFirebaseParser(dataVal), (objReservation) => {
        const reservationDate =Lodash.get(objReservation, ['date'], null);
        const isPastReservation = !Moment(reservationDate, "D/M/YYYY").isSameOrAfter(
          Moment(),
          "D"
        );

         return !objReservation.active && isPastReservation;
        });

        return oldReservations.map(reservation => ({
          ...reservation,
          restaurantImg: restaurantLookup[reservation.restaurant_id].profileurl,
          restaurantName: restaurantLookup[reservation.restaurant_id].name
        }))
                
    } catch(e) {
        console.log(e)
        return []
    }
}

export { getReservationTableData }