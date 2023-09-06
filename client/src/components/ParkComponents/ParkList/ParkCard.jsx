import { Card, Button, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ParkCard = ({ name, description, _id, gallery }) => {
    return (
        <Col md={{ span: 3 }} key={_id}>
            <Card style={{ height: '500px' }} >
                <Carousel>
                    {
                        gallery.map((image, index) => (
                            <Carousel.Item key={index}>
                                <Card.Img variant="top" src={image}
                                    style={{ width: '100%', height: '200px' }} />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
                <Card.Body>
                    <div style={{ height: '100%' }} className='d-flex flex-column justify-content-between'>
                        <div>
                            <Card.Title style={{
                                whiteSpace: 'nowrap', textOverflow:
                                    'ellipsis', overflow: 'hidden'
                            }}>{name}</Card.Title>
                            <Card.Text style={{ height: '170px', textOverflow: 'ellipsis', overflow: 'hidden' }} >{description}</Card.Text>
                        </div>
                        <Link to={`/park/${_id}`}>
                            <Button style={{ width: '100%' }} variant='warning'>Details</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col >
    )
}
export default ParkCard
