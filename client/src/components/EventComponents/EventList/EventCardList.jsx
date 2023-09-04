import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Container } from 'react-bootstrap'
import { AuthContext } from '../../../contexts/auth.context'


const EventList = ({ title, cover, description, _id, owner }) => {

    const { loggedUser } = useContext(AuthContext)

    const ownerEvent = () => {

        return owner === loggedUser._id;
    }

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cover} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/event/${_id}`}>
                        <Button variant="primary">Details</Button>
                    </Link >
                    {ownerEvent &&
                        <>
                            <Link to={`/event/edit/${_id}`}>
                                <Button variant="primary">Edit</Button>
                            </Link >

                            <Link to={`/event/delete/${_id}`}>
                                <Button variant="danger">Delete</Button>
                            </Link >
                        </>
                    }
                </Card.Body>
            </Card>
        </Container>
    )
}
export default EventList