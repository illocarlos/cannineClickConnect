import { useEffect, useState, useContext } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import eventsService from '../../../services/events.service'
import { Container, Row, Col, Button } from "react-bootstrap"
import EventMaps from "../../../components/Maps/EventMaps"
import Loader from "../../../components/Loader/Loader"
import usersService from '../../../services/users.service'
import { AuthContext } from "../../../contexts/auth.context";
import { MessageContext } from "../../../contexts/message.context"
import { formatDate } from "../../../utils/Date.utils"
import "./DetailsEventsPage.css"


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
            .deleteEvent(event_id)
            .then(() => navigate('/event/list'))
            .catch((err) => console.log(err))
    }


    const handleRegister = () => {
        setIsRegistered(true);

        usersService
            .addUserToEvent(event_id, loggedUser)
            .then(() => {
                emitMessage('You are already registered!')
                loadEventDetails()
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const handleRemove = () => {

        usersService
            .removeUserToEvent(event_id, loggedUser)
            .then(() => {
                emitMessage('You are already remove!')
                loadEventDetails()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const formattedDate = formatDate(new Date(event.date))


    return (

        <Container>
            <div className="event-card">

                <h1 className="titleEventCard" >{event.title}</h1>

                <hr />

                <Row>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            <Col md={6}>
                                <h3>Description</h3>
                                <p>{event.description}</p>
                                <hr />
                                <h5>Date: {formattedDate}</h5>
                                <hr />
                                <div className="attendees">
                                    <ul>
                                        {event.attendees.map((elm) => (
                                            <li key={elm.id} className="attendee">
                                                <Link to={`/user/${elm._id}`} className="custom-link">
                                                    <p className="custom-text">{elm.username}</p>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button variant="success" onClick={handleRegister} className="custom-button">
                                    Add to Event
                                </Button>
                                <div className="button-separator"></div>
                                <Button variant="success" onClick={handleRemove} className="custom-button">
                                    Leave Event
                                </Button>
                            </Col>

                            <Col md={6}>
                                <div className="centered-content">
                                    <EventMaps event={event} />
                                </div>
                            </Col>
                        </>
                    )}
                </Row>
                {isEventOwner && (
                    <Col className="edit-delete-button" md={12}>
                        <div className="event-actions">
                            <Link to={`/event/edit/${event_id}`} className="btn btn-warning">
                                Edit Event
                            </Link>
                            <div className="button-separator"></div>
                            <Button variant="danger" onClick={handleDeleteEvent}>Delete</Button>
                        </div>
                    </Col>
                )}
            </div>

        </Container>

    )
}

export default DetailsEventsPage