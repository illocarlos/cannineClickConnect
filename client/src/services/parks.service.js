import axios from 'axios'

class ParkService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getParks() {
        return this.api.get('/park/list')
    }

    newPark(parkData) {

        return this.api.post('/park/newPark', parkData)
    }

}

const parkService = new ParkService()

export default parkService