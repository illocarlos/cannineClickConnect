import axios from 'axios'

class UsersService{
    
    constructor() {
        this.api = axios.create({
            baseURL:`${import.meta.env.VITE_API_URL}`
        })
    }
    getUsers() {
        return this.api.get('/user/list')
    }
}
const usersService = new UsersService()

export default usersService