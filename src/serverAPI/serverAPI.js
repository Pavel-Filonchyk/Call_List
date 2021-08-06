export const serverAPI = {
    getItems () {
    return fetch('http://localhost:3000/data')
        .then((response) => {
            return response.json()
        })
    },

    postItems (values) {
        
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