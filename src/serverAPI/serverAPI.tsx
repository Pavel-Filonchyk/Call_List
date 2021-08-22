import {ValueType} from "../Components/Main/Main"

export const serverAPI = {
    getItems () {
    return fetch('http://localhost:3000/data')
        .then((response) => {
            return response.json()
        })
    },

    postItems (values: ValueType) {
        return fetch('http://localhost:3000/data', {
            method: "POST",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            values 
            })
        })
    }
}