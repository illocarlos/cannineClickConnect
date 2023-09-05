import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import eventsService from '../../../services/events.service'
import { Container, Row, Col, Button } from "react-bootstrap"
import MapContainer from "../../../components/Maps/Maps"

const DetailsEventsPage = () => {

    const { event_id } = useParams()

    const [event, setEvent] = useState({})

    const navigate = useNavigate()


    useEffect(() => {
        loadEventDeails()
    }, [event])

    const loadEventDeails = () => {
        eventsService
            .getEventDetails(event_id)
            .then(({ data }) => setEvent(data))
            .catch(err => console.log(err))
    }

    const ownerEvent = () => {
        return owner === loggedUser._id;
    }

    const handleDeleteEvent = () => {
        eventsService
            .deleteEvent(event_id, event)
            .then(() => navigate('/event/list'))
            .catch((err) => console.log(err))
    }

    const handleUpdateEvent = () => {
        eventsService
            .editEvent(event_id)
            .then(() => navigate('/event/list'))
            .catch((err) => console.log(err))
    }

    return (
        <Container>

            <h1 className="mb-4">Detalles de {event.title}</h1>
            <hr />

            <Row>

                <Col md={{ span: 6 }}>
                    <h3>Descripción</h3>
                    <p>{event.description}</p>
                    <hr />
                </Col>

                <Col md={{ span: 6 }}>
                    <MapContainer location={event.location} />


                </Col>
                {ownerEvent &&
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