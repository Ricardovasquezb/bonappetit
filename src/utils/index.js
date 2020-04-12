import * as firebase from 'firebase/app'
import 'firebase/database'
import { getReservationTableData } from './ReservationUtils';

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

export const searchExpireReservations = async (userId) => {
    try {
        const dataSnapShot = await firebase.database().ref("/reservations/").orderByChild("user_uid").equalTo(userId).once("value")
        const dataVal = dataSnapShot.val()
        let dataValParsed = arrayFirebaseParser(dataVal).filter(item => item.active === true)
        const allResturantId = uniqueItemsFromKey(dataValParsed, "restaurant_id")
        const allRestaurants = []
        

        for (let restaurantId of allResturantId) {
            const restaurantSnapShot = await firebase.database().ref("/restaurants/" + restaurantId).once("value")
            const restaurantVal = restaurantSnapShot.val()
            allRestaurants.push({...restaurantVal, restaurantId})
        }

        dataValParsed = dataValParsed.map(reservation => {
            const restaurant = allRestaurants.find(item => item.restaurantId === reservation.restaurant_id)
            return {
                ...reservation,
                restaurantImg: restaurant.profileurl,
                restaurantName: restaurant.name
            }
        })
        
        return dataValParsed            
    } catch(e) {
        console.error(e)
        return []
    }
}

export { getReservationTableData }