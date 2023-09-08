import './ParkList.css'
import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import parkService from '../../../services/parks.service'
import ParkCard from './ParkCard.jsx'

const ParkList = () => {

  const [parks, setParks] = useState([])

  useEffect(() => {
    loadParks()
  }, [parks])

  const loadParks = () => {
    parkService
      .getParks()
      .then(({ data }) => setParks(data))
      .catch((err) => console.log(err))
  }

  return (
    <Container>

      <Row >
        {
          parks.map(elm => <ParkCard {...elm} />)
        }
      </Row>

    </Container>
  )
}
export default ParkList