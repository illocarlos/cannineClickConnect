import { Link } from 'react-router-dom'
import { Card, Button, Container } from 'react-bootstrap'



const EventList = ({ title, cover, description, _id }) => {



    return (
        <Container>
            <Card >
                <Card.Img variant="top" src={cover} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/event/${_id}`}>
                        <Button variant="primary">Details</Button>
                    </Link >
                </Card.Body>
            </Card>
        </Container>
    )
}
export default EventList