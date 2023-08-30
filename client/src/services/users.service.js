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
}
const usersService = new UsersService()

export default usersService