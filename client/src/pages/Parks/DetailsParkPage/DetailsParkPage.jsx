import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import parksService from '../../../services/parks.service'
import { Container, Row, Col } from 'react-bootstrap'
import MapContainer from "../../../components/Maps/Maps"

const DetailsParkPage = () => {

    const { park_id } = useParams()

    const [park, setPark] = useState({})

    useEffect(() => {
        loadParkDetails()
    }, [park])

    const loadParkDetails = () => {
        parksService
            .getParkDetails(park_id)
            .then(({ data }) => setPark(data))
            .catch(err => console.log(err))
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
                <Link to="/parks/list" className="btn btn-dark">Volver a la galería</Link>


            </Row>

        </Container >
    )
}

export default DetailsParkPage