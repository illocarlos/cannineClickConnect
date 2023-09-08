import { Card, Button, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ParkCard.css'


const ParkCard = ({ name, description, _id, gallery }) => {
    return (

        <Col md={{ span: 3 }} key={_id}>
            <Card style={{ backgroundColor: "rgba(106, 101, 101, 0.8)", color: "white" }} className="mt-3 park-card">
                <Carousel>
                    {gallery.map((image, index) => (
                        <Carousel.Item key={index}>
                            <Card.Img variant="top" src={image} className="carousel-image" />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Card.Body>
                    <div className="text-container">
                        <div>
                            <Card.Title className="park-title">{name}</Card.Title>
                            <Card.Text className="park-description">{description}</Card.Text>
                        </div>
                        <Link to={`/park/${_id}`}>
                            <Button variant='success' className="details-button">Details</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default ParkCard
