import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import usersService from '../../../services/users.service'
import UserList from '../../../components/UserComponents/UserList/UserList'


const UsersPage = () => {

    return (
        <Container>
            <h1>Nuestra comunidad</h1>
            <hr />

            <UserList users={users} />

        </Container>
    )
}

export default UsersPage