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
    
}

const parkService = new ParkService()

export default parkService