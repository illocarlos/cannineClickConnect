import { Container } from "react-bootstrap";
import NewEventForm from "../../components/NewEventForm/NewEventForm";

const newEventPage = () => {

    return (
        <div className="newEventPage">

            <Container>
                <h1>Create a new Event</h1>
                <hr />
                <NewEventForm />
            </Container>

        </div>
    )
}

export default newEventPage