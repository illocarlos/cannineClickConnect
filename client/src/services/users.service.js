import axios from 'axios'

class UsersService {

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
    getUsers() {
        return this.api.get('/user/list')
    }

    getUserDetails(user_id) {
        return this.api.get(`/user/${user_id}`);
    }

    editUser(user_id, userData) {
        return this.api.post(`/user/edit/${user_id}`, { userData })
    }

    deleteUser(user_id) {
        return this.api.delete(`/user/delete/${user_id}`)
    }

    addUserToEvent(idEvent, idUser) {
        return this.api.post("/user/addUserToEvent", { idEvent, idUser })
    }

    removeUserToEvent(idEvent, idUser) {
        return this.api.post("/user/removeUserToEvent", { idEvent, idUser })
    }


}

const usersService = new UsersService()

export default usersService