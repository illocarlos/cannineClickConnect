import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import eventsService from '../../../services/events.service'



const DetailsEventsPage = () => {

    const {event_id} = useParams()

    const [event, setEvent] = useState({})
    
    
    useEffect (() => {
        loadEventDeails()
    }, [event])

    const loadEventDeails = () => {
        eventsService
            .getEventDetails(event_id)
            .then(({data}) => setEvent(data))
            .catch(err => console.log(err))
    }


    return (
        <h1>Detalles del evento</h1>
    )
}

export default DetailsEventsPage