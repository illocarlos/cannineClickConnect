import { Container, Button, Modal, Row, Col } from 'react-bootstrap'
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

        <>
            <Container>
                <div className='d-flex justify-content-between' >

                    <h1>Galeria de parques</h1>

                    {loggedUser && <Button style={{ width: '120px', fontSize: '1.2rem' }} className='mt-2' variant='warning'
                        size='sm' onClick={() => setShowModal(true)}>New park</Button>}

                </div>
                <hr />

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
                    <NewParkForm fireFinalActions={fireFinalActions} refreshParks={loadParks} />
                </Modal.Body>
            </Modal>
        </>

    )
}

export default ParkGalleryPage;