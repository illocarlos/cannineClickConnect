import './NewDog.css'
import { useContext, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import ButtonCastrated from './ButtonOpen'
import dogService from "../../services/dogs.service";
import uploadServices from '../../services/upload.service';
import { MessageContext } from '../../contexts/message.context';
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../../contexts/auth.context';
import Loader from '../Loader/Loader'
import { ThemeContext } from "../../contexts/theme.context";
import * as DOGS_CONSTS from '../../consts/dog.consts';
import FormError from '../FormError/FormError';



function NewDogForm() {

    const { theme, switchTheme } = useContext(ThemeContext)
    const { loggedUser } = useContext(AuthContext)

    const [DogData, setDogData] = useState({
        name: "",
        description: "",
        images: [],
        age: 0,
        size: "",
        gender: "",
        castrated: false,
    })

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()
    const { emitMessage } = useContext(MessageContext)
    const [errors, setErrors] = useState([])

    const handleCastratedStatus = value => {
        setDogData({
            ...DogData,
            castrated: value
        })
    }

    const handleInputChange = e => {

        const { value, name } = e.currentTarget
        setDogData({
            ...DogData,
            [name]: value
        })
    }

    const handleDogSubmit = e => {
        e.preventDefault()
        setIsLoading(true)

        dogService
            .newDog(DogData)
            .then(({ data }) => {
                const idDog = data._id
                const idUser = loggedUser._id

                return dogService.addDogToUser(idUser, idDog)
            })
            .then(() => {
                emitMessage('create new dog')
                navigate(`/user/${loggedUser._id}`)
            })
            .catch(err => {
                setErrors(err.response.data.errorMessages)
            })
            .finally(() => {
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
                setDogData({
                    ...DogData,
                    images: data.cloudinary_urls
                })
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='NewDogForm'>

            <Form bg={theme === 'dark' ? 'light' : 'dark'}
                data-bs-theme={theme === 'dark' ? 'light' : 'dark'} onSubmit={handleDogSubmit} encType='multipart/form-data'>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name="name" value={DogData.name} onChange={handleInputChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" name="description" value={DogData.description} onChange={handleInputChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>age</Form.Label>
                            <Form.Control
                                min={0}
                                max={100}
                                type="number" placeholder="age"
                                name="age" value={DogData.age}
                                onChange={handleInputChange} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="disabledSelect">Size </Form.Label>
                            <Form.Select id="size" value={DogData.size} name="size" onChange={handleInputChange}>
                                <option>Disabled select</option>

                                {

                                    DOGS_CONSTS.DOG_SIZE.map(elm => <option>{elm}</option>)


                                }
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="disabledSelect">gender</Form.Label>
                            <Form.Select id="gender" value={DogData.gender} name="gender" onChange={handleInputChange}>
                                <option>Disabled select</option>
                                {

                                    DOGS_CONSTS.DOG_GENDER.map(elm => <option>{elm}</option>)


                                }

                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="images">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control type="file" multiple onChange={handleFileUpload} />
                </Form.Group>
                <Form.Group>

                    <ButtonCastrated handleCastratedStatus={handleCastratedStatus} />
                </Form.Group>


                {isLoading ? (
                    <Loader />
                ) : (
                    <Button className='mt-3' variant='warning' type="submit" style={{ width: '100%' }}  >Add</Button>
                )}

                {errors.length > 0 && <FormError> {errors.map(elm => <p>{elm}</p>)}</FormError>}


            </Form>

        </div>
    )
}

export default NewDogForm;
