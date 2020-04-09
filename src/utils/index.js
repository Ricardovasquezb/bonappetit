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

export { getReservationTableData }