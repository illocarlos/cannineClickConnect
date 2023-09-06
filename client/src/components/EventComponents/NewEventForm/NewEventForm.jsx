import './NewEventForm.css'
import { useState, useContext } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import eventService from "../../../services/events.service"
import { MessageContext } from "../../../contexts/message.context"
import Loader from "../../Loader/Loader"
import { ThemeContext } from "../../../contexts/theme.context";
import FormError from '../../FormError/FormError';
import { useDate } from '../../../contexts/getCurrentDate.context'


const NewEventForm = ({ fireFinalActions }) => {
  const { getCurrentDate } = useDate()
  const { theme, switchTheme } = useContext(ThemeContext)
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()
  const { emitMessage } = useContext(MessageContext)


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
    if (name === "number" && (isNaN(value) || parseInt(value) < 0)) {
      return;
    }


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
    setIsLoading(true)

    eventService
      .newEvent(eventData)
      .then(() => {
        fireFinalActions()
        emitMessage('create new event')
        navigate('/event/list')
      })
      .catch(err => {
        setErrors(err.response.data.errorMessages)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (

    <Form className='formEvent' bg={theme === 'dark' ? 'light' : 'dark'}
      data-bs-theme={theme === 'dark' ? 'light' : 'dark'}
      style={{ width: '300px' }} onSubmit={handleEventSubmit}>

      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={eventData.title}
          name="title" onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={eventData.description}
          name="description" onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="cover">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" value={eventData.cover} name="cover" onChange={handleInputChange} />
      </Form.Group>

      <Row>
        <Col>
          <Form.Control min={getCurrentDate()}
            type="date" value={eventData.date}
            name="date" onChange={handleInputChange} />
        </Col>

        <Col >
          <Form.Group className="mb-3" controlId="street">

            <Form.Control type="text" value={eventData.address.street}
              placeholder="Street" name="street" onChange={handleInputChange} />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="number">
            <Form.Label>Number</Form.Label>
            <Form.Control type="number" value={eventData.address.number}
              name="number" onChange={handleInputChange} />
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
            <Form.Label>ZIP</Form.Label>
            <Form.Control type="text" value={eventData.address.zipcode} name="zipcode" onChange={handleInputChange} />
          </Form.Group>
        </Col>

      </Row>

      {
        isLoading ? (
          <Loader />
        ) : (

          <Button className="buttonClick" variant="warning" style={{ width: '300px' }} type="submit">Submit</Button>

        )
      }
      {errors.length > 0 && <FormError> {errors.map(elm => <p>{elm}</p>)}</FormError>}

    </Form >
  )
}

export default NewEventForm