export const arrayFirebaseParser = (firebaseArray) => {
    const keys = Object.keys(firebaseArray)
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