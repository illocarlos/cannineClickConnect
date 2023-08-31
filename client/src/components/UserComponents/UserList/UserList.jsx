import './UserList.css'

import { useEffect, useState } from 'react'
import usersService from '../../../services/users.service'


const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = () => {

        usersService
            .getUsers()
            .then(({ data }) => setUsers(data))
            .catch((err) => console.log(err))
    }
   
    return (
      users.map(elm => <p>{elm.username}</p>)
    );

}

export default UserList