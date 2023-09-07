import { Container } from "react-bootstrap"
import NewParkForm from "../../../components/ParkComponents/NewPark/Newpark"
import { useNavigate } from 'react-router-dom'


const NewParkPage = () => {

    const navigate = useNavigate()
    const fireFinalActions = () => {
        navigate('/')
    }

    return (
        <div className="newPark">
            <Container>
                <h1>New park</h1>
                <hr />
                <NewParkForm fireFinalActions={fireFinalActions} />
            </Container>
        </div>
    )
}

export default NewParkPage