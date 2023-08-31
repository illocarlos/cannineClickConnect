import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import eventsService from '../../../services/events.service'
import { Container, Row, Col } from "react-bootstrap"

const DetailsEventsPage = () => {

    const { event_id } = useParams()

    const [event, setEvent] = useState({})


    useEffect(() => {
        loadEventDeails()
    }, [event])

    const loadEventDeails = () => {
        eventsService
            .getEventDetails(event_id)
            .then(({ data }) => setEvent(data))
            .catch(err => console.log(err))
    }


    return (
        <Container>

            <h1 className="mb-4">Detalles de {event.title}</h1>
            <hr />

            <Row>

                <Col md={{ span: 6, offset: 1 }}>
                    <h3>Descripción</h3>
                    <p>{event.description}</p>
                    <hr />

                    <Link to="/events/list" className="btn btn-dark">Volver a la galería</Link>
                </Col>


            </Row>

        </Container >
    )
}

export default DetailsEventsPage