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

    getEventDetails() {
        return this.api.get(`/event/${event_id}`)
    }
    
    newEvent (eventData) {

        return this.api.post('event/newEvent', eventData)
    }

}

const eventsService = new EventService()

export default eventsService