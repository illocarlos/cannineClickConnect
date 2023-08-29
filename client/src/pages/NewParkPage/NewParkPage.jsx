import { Container } from "react-bootstrap"
import NewParkForm from "../../components/NewPark/newpark"



const NewParkPage = () => {

    return (
        <div className="newPark">
            <Container>
                <NewParkForm />
            </Container>
        </div>
    )

}
export default NewParkPage