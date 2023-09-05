import { Container } from 'react-bootstrap'
import UserList from '../../../components/UserComponents/UserList/UserList'

// TODO: BAJAR ESTADO

const UsersPage = () => {

    return (
        <>
            <Container>
                <h1>Nuestra comunidad</h1>
                <hr />

                <UserList />

            </Container>
        </>
    )
}

export default UsersPage