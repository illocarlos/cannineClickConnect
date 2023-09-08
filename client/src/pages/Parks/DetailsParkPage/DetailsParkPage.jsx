import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import parksService from '../../../services/parks.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ParkMaps from "../../../components/Maps/ParkMaps"
import Rating from "../../../components/Rating/AverageRating"
import HandleVote from "../../../components/Rating/HandleVote"
import Loader from "../../../components/Loader/Loader"
import "./DetailsParkPage.css"

const DetailsParkPage = () => {

    const { park_id } = useParams()

    const [park, setPark] = useState({})

    const [userRating, setUserRating] = useState(0);

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadParkDetails()
    }, [])

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
        <div className="overlay-background">
            <Container>
                <div className="event-card">

                    <h1 className="titleEventCard" >{park.name}</h1>

                    <hr />

                    <Row>
                        {isLoading ? (
                            <Loader />
                        ) : (

                            <Col md={{ span: 6 }}>
                                <h3>Description</h3>
                                <p>{park.description}</p>
                                <hr />


                                <p>SIZE: {park.size}</p>


                                <p>CROWDEDNESS: {park.crowdedness}</p>


                                <p>OPEN: {park.open ? 'YES' : 'NO'}</p>

                                <h1><Rating media={average} /></h1>

                                <hr />


                                <div className="rating-container">

                                    <HandleVote initialValue={userRating} onRate={handleUserRating} />
                                    <div className="centered-button">
                                        <Button variant="success" className="custom-button" onClick={handleRatePark}>
                                            Vote
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        )}

                        <Col md={{ span: 6 }}>
                            <div className="centered-content">
                                <ParkMaps park={park} />
                            </div>
                        </Col>

                    </Row>
                    {isParkOwner &&
                        <Col className="edit-delete-button" md={12}>
                            <div className="event-actions">
                                <Link to={`/park/edit/${park_id}`} className="btn btn-warning">
                                    Edit Park
                                </Link>
                                <div className="button-separator"></div>
                                <Button variant='danger' onClick={handleDeletePark}>Delete</Button>
                            </div>
                        </Col>
                    }
                </div>

            </Container>
        </div>


    )
}

export default DetailsParkPage