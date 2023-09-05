import { useContext, useState } from 'react';
import './NewDog.css'
import { Form, Button } from 'react-bootstrap';
import ButtonCastrated from './ButtonOpen'
import dogService from "../../services/dogs.service";
import uploadServices from '../../services/upload.service';
import { MessageContext } from '../../contexts/message.context';
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../../contexts/auth.context';
import Loader from '../Loader/Loader'




function NewDogForm() {


    const { loggedUser } = useContext(AuthContext)

    const [DogData, setDogData] = useState({
        name: "",
        description: "",
        images: "",
        age: 0,
        size: "",
        gender: "",
        castrated: false,
    })

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()

    const { emitMessage } = useContext(MessageContext)
    const [errors, setErrors] = useState([])
    console.log("estos sonlos errores", errors)

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

                dogService
                    .addDogToUser(idUser, idDog)
                    .then(() => console.log("se ha añadido el perro al user"))
                    .catch(err => setErrors(err.response.data.errorMessages))


                emitMessage('create new dog')
                navigate('/user/list')
            })
            .catch(err => console.log(err))
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
            <Form onSubmit={handleDogSubmit} encType='multipart/form-data'>
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

                <Form.Group className="mb-3" >
                    <Form.Label>age</Form.Label>
                    <Form.Control type="number" placeholder="age" name="age" value={DogData.age} onChange={handleInputChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="disabledSelect">Size </Form.Label>
                    <Form.Select id="size" value={DogData.size} name="size" onChange={handleInputChange}>
                        <option>Disabled select</option>
                        <option>BIG</option>
                        <option>MEDIUM</option>
                        <option>SMALL</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="disabledSelect">gender</Form.Label>
                    <Form.Select id="gender" value={DogData.gender} name="gender" onChange={handleInputChange}>
                        <option>Disabled select</option>
                        <option>MALE</option>
                        <option>FEMALE</option>

                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="images">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control type="file" multiple onChange={handleFileUpload} />
                </Form.Group>

                <ButtonCastrated handleCastratedStatus={handleCastratedStatus} />

                {isLoading ? (
                    <Loader />
                ) : (
                    <Button variant="dark" type="submit">Add</Button>
                )}


            </Form>
        </div>
    )
}

export default NewDogForm;
