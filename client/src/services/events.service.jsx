import axios from 'axios'

class EventService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}`
        })
    }

    getEvents() {
        return this.api.get('/event/list')
    }
    
}

const eventService = new EventService()

export default eventService