import { useContext } from 'react'
import './EventList.css'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { AuthContext } from '../../../contexts/auth.context'


const EventList = ({ events }) => {

    const { loggedUser } = useContext(AuthContext)

    const ownerEvent = (event) => {
        return event.owner === loggedUser._id;
    }
    return (
        <>

            {events.map(elm =>

                // TODO: DESACOPLAR EVENTCARD

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={elm.cover} />
                    <Card.Body>
                        <Card.Title>{elm.title}</Card.Title>
                        <Card.Text>
                            {elm.description}
                        </Card.Text>
                        <Link to={`/event/${elm._id}`}>
                            <Button variant="primary">Details</Button>
                        </Link >
                        {ownerEvent(elm) &&
                            <Link to={`/event/${elm._id}`}>
                                <Button variant="primary">Edit</Button>
                            </Link >
                        }
                    </Card.Body>
                </Card>
            )}


        </>
    )
}


export default EventList