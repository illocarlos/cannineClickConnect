import { Container } from 'react-bootstrap'
import UserList from '../../../components/UserComponents/UserList/UserList'
import './UsersPage.css'

// TODO: BAJAR ESTADO

const UsersPage = () => {

    return (
        <div className="overlay-background">
            <Container className='users-page-container'>
                <h1 className='d-flex justify-content-center mt-4'>COMMUNITY</h1>
                <hr />
                <UserList />

            </Container>
        </div>
    )
}

export default UsersPage