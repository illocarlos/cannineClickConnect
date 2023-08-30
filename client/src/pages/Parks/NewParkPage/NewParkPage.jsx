import { Container } from "react-bootstrap"
import NewParkForm from "../../../components/ParkComponents/NewPark/Newpark"


const NewParkPage = () => {

    return (
        <div className="newPark">
            <Container>
                <h1>NUEVO PARQUE</h1>
                <NewParkForm />
            </Container>
        </div>
    )
}

export default NewParkPage