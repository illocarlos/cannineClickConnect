import UserCard from './UserCard.jsx'
import usersService from '../../../services/users.service'
import { useEffect, useState } from 'react'

const UserList = () => {
    const [users, setUsers] = useState([])

    const loadUsers = () => {

        usersService
            .getUsers()
            .then(({ data }) => setUsers(data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        loadUsers()
    }, [])

    console.log(users)
    return (
        <>
            {
                users.map(elm => <UserCard {...elm} />)
            }
        </>
    );
}
export default UserList