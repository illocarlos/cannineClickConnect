import axios from "axios";

class EventService {
  
  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}`,
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  getEvents() {
    return this.api.get("/event/list");
  }

  getEventDetails(event_id) {
    return this.api.get(`/event/${event_id}`);
  }

  newEvent(eventData) {
    return this.api.post("/event/newEvent", eventData);
  }

  editEvent(event_id, eventData) {
    return this.api.put(`/event/edit/${event_id}`, {eventData})
  }

  deleteEvent(event_id) {
    return this.api.delete(`/event/delete/${event_id}`);
  }
  
}

const eventsService = new EventService();

export default eventsService;
