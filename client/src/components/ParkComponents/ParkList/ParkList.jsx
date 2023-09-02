import './ParkList.css'
import { Container, Row } from 'react-bootstrap'
import ParkCard from './ParkCard.jsx'
const ParkList = ({ parks }) => {
  return (
    <Container>
      <Row>
        {
          parks.map(elm => <ParkCard {...elm} />)
        }
      </Row>
    </Container>
  )
}
export default ParkList