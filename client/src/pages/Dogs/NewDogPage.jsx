import { Container } from "react-bootstrap";
import NewDogForm from "../../components/DogComponent/NewDogForm"


const NewDogPage = () => {

    return (

        <div className="newDog">
            <Container>
                <h1>NUEVO PERRO</h1>
                <NewDogForm />
            </Container>
        </div>
    )

}

export default NewDogPage