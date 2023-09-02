import './UserCard.css'
import { Link } from 'react-router-dom'
import { Col, Row, Container } from 'react-bootstrap'
const UserCard = ({ username, avatar, about, _id }) => {
    return (
        <Container md={{ span: 3 }}>
            <Link className="user-link" to={`/user/${_id}`}>
                <Row className="user-container">
                    <Col className="user-avatar">
                        <img src={avatar} alt="avatar" />
                    </Col>
                    <Col className="user-info">
                        <h4 className="user-name">{username}</h4>
                        <p className="user-about">{about}</p>
                    </Col>
                </Row>
            </Link>
        </Container >
    )
}
export default UserCard




