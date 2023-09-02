import { Card, Button, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ParkCard = ({ name, description, _id, gallery }) => {
    return (
        <Col md={{ span: 3 }} key={_id}>
            <Card style={{ width: '18rem' }}>
                <Carousel>
                    {gallery.map((image, index) => (
                        <Carousel.Item key={index}>
                            <Card.Img variant="top" src={image} style={{ width: '100%', height: '200px' }} />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Link to={`/park/${_id}`}>
                        <Button variant="primary">Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default ParkCard
