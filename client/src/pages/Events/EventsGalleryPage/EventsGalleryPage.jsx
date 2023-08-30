import { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import eventService from '../../../services/events.service'
import EventList from '../../../components/EventComponents/EventList/EventList'
import { Link } from 'react-router-dom'

const EventsGalleryPage = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
    loadEvents()
  }, [])

  const loadEvents = () => {

    eventService
      .getEvents()
      .then(({ data }) => setEvents(data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Container>
        <h1>Galeria de eventos</h1>
        <hr />
        <Link to={"/event/newEvent"}>
          <Button variant="success">New Event</Button>
        </Link>
        <EventList events={events} />
      </Container>
    </>
  )

}
export default EventsGalleryPage;
