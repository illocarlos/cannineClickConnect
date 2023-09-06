import axios from "axios";

class ParkService {

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

    getParks() {
        return this.api.get("/park/list");
    }

    getParkDetails(park_id) {
        return this.api.get(`/park/${park_id}`);
    }

    newPark(parkData) {
        return this.api.post("/park/newPark", parkData);
    }

    editPark(park_id, parkData) {
        return this.api.put(`park/edit/${park_id}`, { parkData })
    }

    deletePark(park_id) {
        return this.api.delete(`/park/delete/${park_id}`)
    }
}

const parkService = new ParkService();

export default parkService;
