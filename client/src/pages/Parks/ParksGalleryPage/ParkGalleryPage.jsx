import { Container, Button } from 'react-bootstrap'
import ParkList from '../../../components/ParkComponents/ParkList/ParkList'
import { Link } from 'react-router-dom'

const ParkGalleryPage = () => {

    return (
        <Container>

            <h1>Galeria de parques</h1>

            <hr />
            <Link to={"/park/newPark"}>
                <Button variant="success">New Event</Button>
            </Link>

            <ParkList />

        </Container>
    )
}

export default ParkGalleryPage;