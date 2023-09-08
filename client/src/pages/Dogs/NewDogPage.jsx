import './NewDogPage.css'
import { Container } from "react-bootstrap";
import NewDogForm from "../../components/DogComponent/NewDogForm"


const NewDogPage = () => {

    return (

        <div className=" conDog mt-5 ">




            <div className='newDog'>
                <h2>NEW DOG</h2>
                <hr />
                <NewDogForm />
            </div>


        </div>
    )

}

export default NewDogPage