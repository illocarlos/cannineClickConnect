import axios from "axios";

class DogService {

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

    getDogs() {
        return this.api.get("/dog/list");
    }

    getDogDetails(dog_id) {
        return this.api.get(`/dog/${dog_id}`);
    }

    newDog(dogData) {
        return this.api.post("/dog/newdog", dogData);
    }

    addDogToUser(idUser, idDog) {
        return this.api.post("/dog/addDogToUser", { idUser, idDog });

    }

    deletedDog(idUser, idDog) {
        console.log(idUser, idDog)
        return this.api.post("/dog/deleteDogUser", { idUser, idDog });
    }

}

const dogService = new DogService();

export default dogService;