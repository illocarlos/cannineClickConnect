import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import parksService from '../../../services/parks.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import MapContainer from "../../../components/Maps/ParkMaps"
import Rating from "../../../components/Rating/AverageRating"
import HandleVote from "../../../components/Rating/HandleVote"
import Loader from "../../../components/Loader/Loader"

const DetailsParkPage = () => {

    const { park_id } = useParams()

    const [park, setPark] = useState({})

    const [userRating, setUserRating] = useState(0);

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadParkDetails()
    }, [park])

    const loadParkDetails = () => {
        parksService
            .getParkDetails(park_id)
            .then(({ data }) => setPark(data))
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    }

    const isParkOwner = () => {
        return owner === loggedUser._id;
    }

    const handleDeletePark = () => {
        parksService
            .deletePark(park_id)
            .then(() => navigate('/park/list'))
            .catch((err) => console.log(err))
    }

    const handleUserRating = (newRating) => {
        setUserRating(newRating);
    };


    const handleRatePark = () => {
        const updatedRatings = [...park.rating, userRating];

        const updatedPark = {
            ...park,
            rating: updatedRatings,
        };

        parksService
            .editPark(park_id, updatedPark)
            .then(() => {
                setPark(updatedPark);
            })
            .catch((err) => console.log(err));
    };


    const averageRating = () => {
        if (park.rating && park.rating.length > 0) {
            const sum = park.rating.reduce((total, rating) => total + rating, 0);
            const average = sum / park.rating.length;
            return average;
        } else {
            return 0;
        }
    }

    const average = averageRating()

    return (
        <Container>

            <h1 className="mb-4">Detalles de {park.name}</h1>
            <hr />

            <Row>

                {isLoading ? (
                    <Loader />
                ) : (

                    <Col md={{ span: 6 }}>
                        <h3>Descripción</h3>
                        <p>{park.description}</p>
                        <hr />
                        <HandleVote initialValue={userRating} onRate={handleUserRating} />
                        <Button onClick={handleRatePark}>Votar</Button>
                        <Rating media={average} />


                    </Col>
                )}



                <Col md={{ span: 6 }}>
                    <MapContainer park={park} />
                </Col>

                {
                    isParkOwner &&
                    <>
                        <Link
                            to={`/park/edit/${park_id}`}
                            className="btn btn-warning">
                            Edit Park
                        </Link>

                        <Button variant='warning' onClick={handleDeletePark}>Delete</Button>
                    </>
                }

                <Link to="/parks/list" className="btn btn-dark">Volver a la galería</Link>

            </Row>

        </Container >
    )
}

export default DetailsParkPage