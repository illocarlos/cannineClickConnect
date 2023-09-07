import { useEffect, useState, useContext } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import eventsService from '../../../services/events.service'
import { Container, Row, Col, Button } from "react-bootstrap"
import EventMaps from "../../../components/Maps/EventMaps"
import Loader from "../../../components/Loader/Loader"
import usersService from '../../../services/users.service'
import { AuthContext } from "../../../contexts/auth.context";
import { MessageContext } from "../../../contexts/message.context"


const DetailsEventsPage = () => {

    const { loggedUser } = useContext(AuthContext)
    const { event_id } = useParams()
    const [event, setEvent] = useState({})
    const navigate = useNavigate()
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { emitMessage } = useContext(MessageContext)

    useEffect(() => {
        loadEventDetails()
    }, [])


    const loadEventDetails = () => {
        eventsService
            .getEventDetails(event_id)
            .then(({ data }) => setEvent(data))
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    }

    const isEventOwner = () => {
        return owner === loggedUser._id;
    }

    const handleDeleteEvent = () => {
        eventsService
            .deleteEvent(isLoading, event)
            .then(() => navigate('/event/list'))
            .catch((err) => console.log(err))
    }


    const handleRegister = () => {
        setIsRegistered(true);

        usersService
            .addUserToEvent(event_id, loggedUser)
            .then(() => {
                emitMessage('you are already registered')
                loadEventDetails()
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const handleRemove = () => {
        console.log("-------------->", event_id)
        usersService
            .removeUserToEvent(event_id, loggedUser)
            .then(() => {
                emitMessage('you are already remooove')
                loadEventDetails()
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (

        <Container>


            <h1 className="mb-4">Details{event.title}</h1>
            <hr />

            <Row>
                {isLoading ? (
                    <Loader />
                ) : (

                    <Col md={{ span: 6 }}>
                        <h3>Descriptions</h3>
                        <p>{event.description}</p>
                        <hr />
                        <p>{event.date}</p>



                        <hr />
                        <button onClick={handleRegister}>Add to Event</button>
                        <button onClick={
                            handleRemove
                        }>reeemooooove</button>
                        {event.attendees}
                    </Col>
                )}

                <Col md={{ span: 6 }}>
                    <EventMaps event={event} />
                </Col>

                {
                    isEventOwner &&
                    <>
                        <Link
                            to={`/event/edit/${event_id}`}
                            className="btn btn-warning">
                            Edit Event
                        </Link>

                        <Button onClick={handleDeleteEvent}>Delete</Button>
                    </>
                }

                <Link to="/event/list" className="btn btn-dark">Gallery</Link>

            </Row>

        </Container >
    )
}

export default DetailsEventsPage