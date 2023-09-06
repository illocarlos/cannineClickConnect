import './NewEventPage.css'
import { Container } from "react-bootstrap";
import NewEventForm from "../../../components/EventComponents/NewEventForm/NewEventForm";
import { useNavigate } from 'react-router-dom'


const newEventPage = () => {

    const navigate = useNavigate()
    const fireFinalActions = () => {
        navigate('/')
    }
    return (

        <div>
            <Container className="newEvents">
                <h1>New Event</h1>
                <hr />
                <NewEventForm fireFinalActions={fireFinalActions} />
            </Container >
        </div>

    )
}

export default newEventPage