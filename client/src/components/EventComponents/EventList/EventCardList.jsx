import { Link } from 'react-router-dom'
import { Card, Button, Col, Carousel } from 'react-bootstrap'
import './EventList.css'


const EventList = ({ title, cover, description, _id }) => {
    return (
        <div key={_id}>
            <Card  >
                <Carousel style={{ height: '300px', width: '300px' }}>
                    {
                        cover.map((image, index) => (
                            <Carousel.Item key={index}>
                                <Card.Img variant="top" src={image}
                                />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>

                <Card.Body style={{ color: 'white', height: '300px', width: '300px' }}>
                    <div className='d-flex flex-column justify-content-between'>
                        <div>
                            <Card.Title style={{
                                whiteSpace: 'nowrap', textOverflow:
                                    'ellipsis', overflow: 'hidden'
                            }}>{title}</Card.Title>
                            <Card.Text style={{
                                height: '170px',
                                textOverflow: 'ellipsis', overflow: 'hidden'
                            }}>
                                {description}</Card.Text>
                        </div>
                        <Link to={`/event/${_id}`}>
                            <Button className='bottonEvent' style={{ width: '100%' }} variant='warning'>Details</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div >
    )

}
export default EventList