import { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'
import eventService from '../../services/events.service.jsx'
import EventList from '../../components/EventList/EventList.jsx'

const EventsGalleryPage = () => {
        
const[events,setEvents]=useState([])

    useEffect(() => {
      loadEvents()
    },[])

    const loadEvents = () => {

            eventService
              .getEvents()
              .then(({ data }) =>setEvents(data))
              .catch((err) => console.log(err));
}

    return (
        <>
        <Container>
        <h1>Galeria de eventos</h1>
                <hr />
                <EventList events={events}/>
        </Container>
        </>
    )

}
export default EventsGalleryPage;
