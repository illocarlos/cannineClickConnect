import axios from 'axios'

class ParkService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}`
        })
    }

    getParks() {
        return this.api.get('/park/list')
    }

    getParkDetails(park_id) {
        return this.api.get(`/park/${park_id}`, park_id)        
    }

    newPark(parkData) {

        return this.api.post('/park/newPark', parkData)
    }


}

const parkService = new ParkService()

export default parkService