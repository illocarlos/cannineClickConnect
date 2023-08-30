import axios from 'axios'

class EventService {

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

    getEvents() {
        return this.api.get('/event/list')
    }

    newEvent(eventData) {

        return this.api.post('event/newEvent', eventData)
    }

}

const eventService = new EventService()

export default eventService