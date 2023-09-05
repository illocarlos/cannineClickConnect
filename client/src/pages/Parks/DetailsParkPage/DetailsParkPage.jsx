import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import parksService from '../../../services/parks.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import MapContainer from "../../../components/Maps/Maps"

const DetailsParkPage = () => {

    const { park_id } = useParams()
    const [park, setPark] = useState({})

    const navigate = useNavigate()


    useEffect(() => {
        loadParkDetails()
    }, [park])

    const loadParkDetails = () => {
        parksService
            .getParkDetails(park_id)
            .then(({ data }) => setPark(data))
            .catch(err => console.log(err))
    }

    const ownerPark = () => {
        return owner === loggedUser._id;
    }

    const handleDeletePark = () => {
        parksService
            .deletePark(park_id)
            .then(() => navigate('/park/list'))
            .catch((err) => console.log(err))
    }

    return (
        <Container>

            <h1 className="mb-4">Detalles de {park.name}</h1>
            <hr />

            <Row>

                <Col md={{ span: 6 }}>
                    <h3>Descripción</h3>
                    <p>{park.description}</p>
                    <hr />

                </Col>

                <Col md={{ span: 6 }}>
                    <MapContainer location={park.location} />


                </Col>
                {ownerPark &&
                    <>
                        <Button variant="primary">Edit</Button>

                        <Button onClick={handleDeletePark}>Delete</Button>
                    </>
                }

                <Link to="/parks/list" className="btn btn-dark">Volver a la galería</Link>


            </Row>

        </Container >
    )
}

export default DetailsParkPage