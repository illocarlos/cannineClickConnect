import './ParkList.css'
import { Link } from 'react-router-dom'
import { Card, Button, Container, Row, Col, Carousel } from 'react-bootstrap'


const ParkList = ({ parks }) => {


  return (
    <Container>

      <Row>

        {parks.map((elm) => (
          // TODO: DESACOPLAR PARKCARD
          <Col md={{ span: 3 }} key={elm._id}>

            <Card style={{ width: '18rem' }}>

              <Carousel>
                {elm.gallery.map((image, index) => (
                  <Carousel.Item key={index}>
                    <Card.Img variant="top" src={image} style={{ width: '100%', height: '200px' }} />
                  </Carousel.Item>
                ))}
              </Carousel>

              <Card.Body>

                <Card.Title>{elm.name}</Card.Title>
                <Card.Text>{elm.description}</Card.Text>

                <Link to={`/park/${elm._id}`}>
                  <Button variant="primary">Details</Button>
                </Link>

              </Card.Body>

            </Card>

          </Col>
        ))}
      </Row>
    </Container>
  )

}

export default ParkList

