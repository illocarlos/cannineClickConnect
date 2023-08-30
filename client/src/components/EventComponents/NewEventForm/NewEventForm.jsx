import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"

import eventService from "../../../services/events.service"

const NewEventForm = () => {

  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    cover: '',
    date: '',
    attendees: [],
    address: {
      street: '',
      number: 0,
      zipcode: 0,
      city: '',
      country: ''
    }
  })

  const handleInputChange = e => {
    const { value, name } = e.currentTarget
    setEventData({
      ...eventData,
      [name]: value,
      address: {
        ...eventData.address,
        [name]: value,
      },
    })
  }

  const handleEventSubmit = e => {
    e.preventDefault()
    eventService
      .newEvent(eventData)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  return (
    <Form onSubmit={handleEventSubmit}>

      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={eventData.title} name="title" onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={eventData.description} name="description" onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="cover">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" value={eventData.cover} name="cover" onChange={handleInputChange} />
      </Form.Group>

      <Row>
        <Col>
          <Form.Control type="date" value={eventData.date} name="date" onChange={handleInputChange} />
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="street">
            <Form.Label>Street</Form.Label>
            <Form.Control type="text" value={eventData.address.street} name="street" onChange={handleInputChange} />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="number">
            <Form.Label>Number</Form.Label>
            <Form.Control type="number" value={eventData.address.number} name="number" onChange={handleInputChange} />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" value={eventData.address.city} name="city" onChange={handleInputChange} />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" value={eventData.address.country} name="country" onChange={handleInputChange} />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="zipcode">
            <Form.Label>ZIP code</Form.Label>
            <Form.Control type="text" value={eventData.address.zipcode} name="zipcode" onChange={handleInputChange} />
          </Form.Group>
        </Col>

      </Row>

      <Button variant="dark" type="submit">
        Submit
      </Button>

    </Form>
  )
}

export default NewEventForm