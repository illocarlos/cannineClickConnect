import './NewDogPage.css'
import { Container } from "react-bootstrap";
import NewDogForm from "../../components/DogComponent/NewDogForm"


const NewDogPage = () => {

    return (

        <div className=" mt-5 ">

            <Container className='newDog' >
                <h1>NEW DOG</h1>
                <NewDogForm />
            </Container>

        </div>
    )

}

export default NewDogPage