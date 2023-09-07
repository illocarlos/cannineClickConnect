import { useContext, useState } from 'react';
import './NewPark.css'
import { Form, Button, Col } from 'react-bootstrap';
import ButtonOpen from './ButtonOpen';
import parkService from "../../../services/parks.service";
import uploadServices from '../../../services/upload.service';
import { MessageContext } from '../../../contexts/message.context';
import { useNavigate } from "react-router-dom"
import Loader from '../../Loader/Loader';
import * as PARK_CONSTS from '../../../consts/park.consts';
import { ThemeContext } from "../../../contexts/theme.context";
import ParksAutocomplete from '../../Autocomplete/ParksAutocomplete';
import FormError from '../../FormError/FormError';


function NewParkForm({ fireFinalActions, refreshParks }) {
    const navigate = useNavigate()
    const { theme } = useContext(ThemeContext)
    const { emitMessage } = useContext(MessageContext)
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([])


    const [parkData, setParkData] = useState({
        name: "",
        description: "",
        gallery: "",
        size: "",
        crowdedness: "",
        rating: 0,
        open: true,
        address: {
            street: '',
            number: 0,
            zipcode: 0,
            city: '',
            country: ''
        },
        coordinates: ""
    })



    const handleOpenStatus = value => {
        setParkData({
            ...parkData,
            open: value
        })
    }

    const handleInputChange = e => {

        const { value, name } = e.currentTarget

        setParkData({
            ...parkData,
            [name]: value,
            address: {
                ...parkData.address,
                [name]: value,
            }
        })
    }

    const handleParkSubmit = e => {

        e.preventDefault()
        setIsLoading(true)

        parkService
            .newPark(parkData)
            .then(() => {
                refreshParks()
                fireFinalActions()
                emitMessage('create new park')

            })

            .catch(err => {
                setErrors(err.response.data.errorMessages)
            })
            .finally(() => {
                navigate('/park/list')
                setIsLoading(false);
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
                setParkData({
                    ...parkData,
                    gallery: data.cloudinary_urls
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='NewParkForm'>
            <Form style={{ textAlign: 'center' }} bg={theme === 'dark' ? 'light' : 'dark'}
                data-bs-theme={theme === 'dark' ? 'light' : 'dark'}
                onSubmit={handleParkSubmit} encType='multipart/form-data'>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name="name" value={parkData.name} onChange={handleInputChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description"
                        name="description" value={parkData.description}
                        onChange={handleInputChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="disabledSelect">Size park</Form.Label>
                    <Form.Select id="size" value={parkData.size} name="size" onChange={handleInputChange}>
                        <option>Disabled select</option>
                        {
                            PARK_CONSTS.PARK_SIZE.map(elm => <option>{elm}</option>)
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="disabledSelect">Crowdedness</Form.Label>
                    <Form.Select id="crowdedness" value={parkData.crowdedness} name="crowdedness" onChange={handleInputChange}>
                        <option>Disabled select</option>
                        {
                            PARK_CONSTS.PARK_CROWDEDNESS.map(elm => <option>{elm}</option>)
                        }

                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control type="file" multiple onChange={handleFileUpload} />
                </Form.Group>

                <ButtonOpen handleOpenStatus={handleOpenStatus} />

                <Col >
                    <ParksAutocomplete parkData={parkData} setParkData={setParkData}>
                        <Form.Group className="mb-3" controlId="street">

                            <Form.Control type="text" value={parkData.address.street}
                                placeholder="Street" name="street" onChange={handleInputChange} />
                        </Form.Group>
                    </ParksAutocomplete>
                </Col>

                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="d-grid ">
                        <Button variant="dark" type="submit">
                            New Park
                        </Button>
                    </div>
                )}
                <div className='mt-3'>
                    {errors.length > 0 && <FormError> {errors.map(elm => <p >{elm}</p>)}</FormError>}
                </div>

            </Form>
        </div>
    )
}

export default NewParkForm;
