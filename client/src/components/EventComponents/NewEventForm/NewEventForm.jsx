import './NewEventForm.css'
import { useState, useContext } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import eventService from "../../../services/events.service"
import { MessageContext } from "../../../contexts/message.context"
import Loader from "../../Loader/Loader"
import uploadServices from "../../../services/upload.service"
import { ThemeContext } from "../../../contexts/theme.context"
import FormError from '../../FormError/FormError'
import { useDate } from '../../../contexts/getCurrentDate.context'
import MapsAutocomplete from '../../Autocomplete/Autocomplete'


const NewEventForm = ({ fireFinalActions }) => {
  const navigate = useNavigate()
  const { getCurrentDate } = useDate()
  const { theme } = useContext(ThemeContext)
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([])
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
    },
    coordinates: ""
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

      })

      .catch(err => {

        setErrors(err.response.data.errorMessages)

      })
      .finally(() => {
        navigate('/event/list')
        setIsLoading(false)
      });

  }
  const handleFileUpload = e => {

    const formData = new FormData()

    for (let i = 0; i < e.target.files.length; i++) {
      formData.append('imagesData', e.target.files[i])
    }

    uploadServices
      .uploadimages(formData)
      .then(({ data }) => {
        setEventData({
          ...eventData,
          cover: data.cloudinary_urls
        })
      })
      .catch(err => console.log(err))
  }


  return (

    <Form className='formEvent' bg={theme === 'dark' ? 'light' : 'dark'}
      data-bs-theme={theme === 'dark' ? 'light' : 'dark'}
      style={{ width: '300px', textAlign: 'center' }} onSubmit={handleEventSubmit}>

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
        <Form.Control type="file" multiple name="cover" onChange={handleFileUpload} />
      </Form.Group>

      <Row>
        <Col>
          <Form.Control min={getCurrentDate()}
            type="date" value={eventData.date}
            name="date" onChange={handleInputChange} />
        </Col>

      </Row>

      <Row>

        <Col >
          <MapsAutocomplete eventData={eventData} setEventData={setEventData}>
            <Form.Group className="mb-3" controlId="street">

              <Form.Control type="text" value={eventData.address.street}
                placeholder="Street" name="street" onChange={handleInputChange} />
            </Form.Group>
          </MapsAutocomplete>
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