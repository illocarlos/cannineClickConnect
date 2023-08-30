import { Container, Button } from 'react-bootstrap'
import ParkList from '../../../components/ParkComponents/ParkList/ParkList'

// TODO: REVISAR QUE TODOS LOS ENLACES INTERNOS SEAN COMPONENTE LINK DE RRD

const ParkGalleryPage = () => {

    return (
        <Container>

            <h1>Galeria de parques</h1>

            <hr />

            <Button href="/park/newPark" variant="success">New Event</Button>

            <ParkList />

        </Container>
    )
}

export default ParkGalleryPage;