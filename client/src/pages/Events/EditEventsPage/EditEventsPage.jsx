import { Container } from "react-bootstrap"
import EditEventForm from "../../../components/EventComponents/EditEvent/EditEventForm"

const EditEvent = () => {

    return (
        <div className="d-flex justify-content-center">
            <Container>
                <h1>Edit event</h1>
                <EditEventForm />
            </Container >
        </div >
    )

}

export default EditEvent