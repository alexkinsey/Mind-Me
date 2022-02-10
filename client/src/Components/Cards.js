const baseURL = '';

const Cards = {
    getCards() {
        return fetch (baseURL)
        .then (res => res.json());
    
    },


    
}