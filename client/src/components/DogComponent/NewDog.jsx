import { useContext, useState } from 'react';
import './NewDog.css'
import { Form, Button } from 'react-bootstrap';
import ButtonCastrated from './ButtonOpen'
import dogService from "../../services/dogs.service";
import uploadServices from '../../../services/upload.service';
import { MessageContext } from '../../../contexts/message.context';
import { useNavigate } from "react-router-dom"



function NewDogForm() {
    const [DogData, setDogData] = useState({
        name: "",
        description: "",
        images: "",
        age: 0,
        size: "",
        gender: 0,
        castrated: false,
    })
    const navigate = useNavigate()

    const { emitMessage } = useContext(MessageContext)

    const handleCastratedStatus = value => {
        setParkData({
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

    const handleParkSubmit = e => {
        e.preventDefault()


        dogService
            .newDog(DogData)
            .then(() => {
                emitMessage('create new dog')
                navigate('/user/list')
            })

            .catch(err => console.log(err))
    }

    const handleFileUpload = e => {

        const formData = new FormData()

        for (let i = 0; i < e.target.files.length; i++) {
            formData.append('imagesData',
                e.target.files[i])
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
            <Form onSubmit={handleParkSubmit} encType='multipart/form-data'>
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
                    <Form.Label htmlFor="disabledSelect">Size park</Form.Label>
                    <Form.Select id="size" value={DogData.size} name="size" onChange={handleInputChange}>
                        <option>Disabled select</option>
                        <option>LARGE</option>
                        <option>MEDIUM</option>
                        <option>SMALL</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="disabledSelect">Crowdedness</Form.Label>
                    <Form.Select id="crowdedness" value={DogData.gender} name="crowdedness" onChange={handleInputChange}>
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

                {/* TODO: CREAR ESTADO DE CARGA PARA INHABILITAR BOTÓN DURANTE SUBIDA */}

                <div className="d-grid">
                    <Button variant="dark" type="submit">
                        New Dog
                    </Button>
                </div>


            </Form>
        </div>
    )
}

export default NewDogForm;
