import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import usersService from '../../../services/users.service'
import { Container, Row, Col } from "react-bootstrap"

const DetailsUserPage = () => {

    const { user_id } = useParams()

    const [user, setUser] = useState({})


    useEffect(() => {
        loadUserProfile()
    }, [user])

    const loadUserProfile = () => {
        usersService
            .getUserDetails(user_id)
            .then(({ data }) => setUser(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>

            <h1 className="mb-4">Detalles de {user.username}</h1>
            <hr />

            <Row>

                <Col md={{ span: 6, offset: 1 }}>
                    <h3>Descripción</h3>
                    <p>{user.description}</p>
                    <hr />

                    <Link to="/user/list" className="btn btn-dark">Volver a la galería</Link>
                </Col>


            </Row>

        </Container >
    )
}

export default DetailsUserPage