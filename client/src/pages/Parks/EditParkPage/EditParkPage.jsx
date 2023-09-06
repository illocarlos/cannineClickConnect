import { Container } from "react-bootstrap"
import EditParkForm from "../../../components/ParkComponents/EditPark/EditParkForm"

const EditPark = () => {

    return (
        <div className="d-flex justify-content-center">
            <Container>
                <h1>Edit park</h1>
                <EditParkForm />
            </Container >
        </div >
    )

}

export default EditPark