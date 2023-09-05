import './NewDogPage.css'
import { Container } from "react-bootstrap";
import NewDogForm from "../../components/DogComponent/NewDogForm"


const NewDogPage = () => {

    return (

        <div>
            <Container className="newDog">
                <h1>NUEVO PERRO</h1>
                <NewDogForm />
            </Container>
        </div>
    )

}

export default NewDogPage