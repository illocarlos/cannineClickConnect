import { useContext } from 'react'
import { Form, Link } from 'react-router-dom'
import { Card, Button, Container } from 'react-bootstrap'
import { AuthContext } from '../../../contexts/auth.context'
import eventsService from '../../../services/events.service'


const EventList = ({ title, cover, description, _id, owner }) => {

    const { loggedUser } = useContext(AuthContext)

    const ownerEvent = () => {

        return owner === loggedUser._id;
    }

    const onDelete = () => {
        eventsService
            .deleteEvent(_id)
            .catch((err) => console.log(err))
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
                            <Button variant="primary">Edit</Button>

                            <Button onClick={onDelete}>Delete</Button>
                        </>
                    }
                </Card.Body>
            </Card>
        </Container>
    )
}
export default EventList