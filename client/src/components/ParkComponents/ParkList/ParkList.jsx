import './ParkList.css'
import { Link } from 'react-router-dom'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'


const ParkList = ({ parks }) => {


  return (
    <Container>

      <Row>
        {
          parks.map(elm =>

            // TODO: DESACOPLAR PARKCARD
            <Col md={{ span: 3 }}>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={elm.gallery[0]} />
                <Card.Body>
                  <Card.Title>{elm.name}</Card.Title>
                  <Card.Text>
                    {elm.description}
                  </Card.Text>
                  <Link to={`/park/${elm._id}`}>
                    <Button variant="primary">Details</Button>
                  </Link >

                </Card.Body>
              </Card>
            </Col>)
        }
      </Row>
    </Container>
  )

}

export default ParkList

