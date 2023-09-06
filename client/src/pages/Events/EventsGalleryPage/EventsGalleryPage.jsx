import { useEffect, useState, useContext } from 'react'
import './EventGalleryPage.css'
import { Container, Button, Modal } from 'react-bootstrap'
import eventService from '../../../services/events.service'
import EventList from '../../../components/EventComponents/EventList/EventList'
import { AuthContext } from "../../../contexts/auth.context";
import NewEventForm from '../../../components/EventComponents/NewEventForm/NewEventForm'

const EventsGalleryPage = ({ }) => {

  const [showModal, setShowModal] = useState(false)
  const [events, setEvents] = useState([])
  const { loggedUser } = useContext(AuthContext)

  useEffect(() => {
    loadEvents()
  }, [])

  const loadEvents = () => {

    eventService
      .getEvents()
      .then(({ data }) => setEvents(data))
      .catch((err) => console.log(err));
  }

  const fireFinalActions = () => {
    setShowModal(false)
    loadEvents()
  }

  return (
    <>
      <Container>
        <h1>Galeria de eventos</h1>
        <hr />
        {loggedUser && <Button variant='dark' size='sm' onClick={() => setShowModal(true)}>New Event</Button>}
        <br />

        <EventList events={events} />

      </Container>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>New event</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalEvent'>
          <NewEventForm fireFinalActions={fireFinalActions} />
        </Modal.Body>
      </Modal>

    </>
  )

}

export default EventsGalleryPage;
