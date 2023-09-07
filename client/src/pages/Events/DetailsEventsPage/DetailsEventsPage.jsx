import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import eventsService from '../../../services/events.service'
import { Container, Row, Col, Button } from "react-bootstrap"
import Loader from "../../../components/Loader/Loader"
import EventMaps from "../../../components/Maps/EventMaps"

const DetailsEventsPage = () => {

    const { event_id } = useParams()

    const [event, setEvent] = useState({})

    const navigate = useNavigate()

    const [isRegistered, setIsRegistered] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadEventDetails()
    }, [event])

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
            .deleteEvent(event_id, event)
            .then(() => navigate('/event/list'))
            .catch((err) => console.log(err))
    }

    const handleRegister = () => {

        setIsRegistered(true);

        const updatedEvent = { ...event };
        updatedEvent.attendees.push(loggedUser._id);

        setEvent(updatedEvent);
    };



    return (

        <Container>


            <h1 className="mb-4">Detalles de {event.title}</h1>
            <hr />

            <Row>
                {isLoading ? (
                    <Loader />
                ) : (

                    <Col md={{ span: 6 }}>
                        <h3>Descripción</h3>
                        <p>{event.description}</p>
                        <hr />
                        <p>{event.date}</p>



                        <hr />
                        {event.attendees}
                        <Button onClick={handleRegister}>Add to Event</Button>

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

                <Link to="/event/list" className="btn btn-dark">Volver a la galería</Link>

            </Row>

        </Container >
    )
}

export default DetailsEventsPage