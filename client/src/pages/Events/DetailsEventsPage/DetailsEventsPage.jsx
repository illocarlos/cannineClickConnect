import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import eventsService from '../../../services/events.service'

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
        /*Elimino el "TODO" de German nota(si son solo dealles de los evento deben de ser
            incluidos aqui no debe de crearse otro componente )*/

        <h1>DETALLES EVENTO</h1>
    )
}

export default DetailsEventsPage