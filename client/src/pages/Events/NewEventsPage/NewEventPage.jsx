import './NewEventPage.css'
import { Container } from "react-bootstrap";
import NewEventForm from "../../../components/EventComponents/NewEventForm/NewEventForm";


const newEventPage = () => {

    return (
        <div >

            <Container className="newEvents">
                <h1>Create a new Event</h1>
                <hr />
                <NewEventForm />

            </Container>

        </div>
    )
}

export default newEventPage