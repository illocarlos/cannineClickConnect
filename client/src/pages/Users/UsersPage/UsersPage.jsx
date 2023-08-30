import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import usersService from "../../../services/users.service"
import UserList from '../../../components/UserComponents/UserList/UserList'



const UsersPage = () => {

    const [ users , setUsers ] = useState([])
    
    useEffect(() => {
        loadUsers()
    },[])

    const loadUsers = () => {

        usersService
        .getUsers()
        .then(({data})=> setUsers(data))
        .catch((err) => console.log(err))
    }


    return (
        <>
        <Container>

                <h1>galeria users</h1>
                <hr />
                <UserList users={users} />

        </Container>   
        </>      

    )


}

export default UsersPage