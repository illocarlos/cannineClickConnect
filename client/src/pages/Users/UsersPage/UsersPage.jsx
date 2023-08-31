import { Container } from "react-bootstrap"
import UserList from '../../../components/UserComponents/UserList/UserList'


const UsersPage = () => {

    return (
            <Container>

                <h1>Galería de usuarios</h1>
                <hr />
                <UserList />

            </Container>
    )
}

export default UsersPage