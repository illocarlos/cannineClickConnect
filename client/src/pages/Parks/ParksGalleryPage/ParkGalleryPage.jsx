import './ParkGalleryPage.css'
import { Container, Button, Modal } from 'react-bootstrap'
import ParkList from '../../../components/ParkComponents/ParkList/ParkList'
import { AuthContext } from "../../../contexts/auth.context";
import NewParkForm from '../../../components/ParkComponents/NewPark/Newpark';
import parkService from '../../../services/parks.service';
import { useEffect, useState, useContext } from 'react'

const ParkGalleryPage = ({ }) => {
    const [showModal, setShowModal] = useState(false)
    const [parks, setParks] = useState([])
    const { loggedUser } = useContext(AuthContext)

    useEffect(() => {

        loadParks()
    }, [])

    const loadParks = () => {

        parkService
            .getParks()
            .then(({ data }) => setParks(data))
            .catch((err) => console.log(err));
    }

    const fireFinalActions = () => {
        setShowModal(false)
        loadParks()
    }

    return (

        <div className="overlay-background">
            <Container >
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h1 className='galery-title'>Galery</h1>
                    </div>
                    <div>
                        {loggedUser && (
                            <Button variant="success" className='custom-button'
                                onClick={() => setShowModal(true)}>New park</Button>
                        )}
                    </div>
                </div>


                <br />

                <ParkList parks={parks} />

            </Container>
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>New Park</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalPark'>
                    <NewParkForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>
        </div>

    )
}

export default ParkGalleryPage;