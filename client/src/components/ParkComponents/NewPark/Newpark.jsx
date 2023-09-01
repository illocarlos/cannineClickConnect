import { useState } from 'react';
import './NewPark.css'
import { Form, Button, Row, Col, ButtonGroup, ToggleButton } from 'react-bootstrap';
import ButtonOpen from './ButtonOpen';
import parkService from "../../../services/parks.service";
import uploadServices from '../../../services/upload.service';



function NewParkForm() {
    const [parkData, setParkData] = useState({
        name: "",
        description: "",
        gallery: "",
        size: "",
        crowdedness: "",
        rating: 0,
        open: true,
    })

    const handleOpenStatus = value => {
        setParkData({ ...parkData, open: value })
    }

    const handleInputChange = e => {

        const { value, name } = e.currentTarget
        setParkData({ ...parkData, [name]: value })
    }

    const handleParkSubmit = e => {
        e.preventDefault()
        parkService
            .newPark(parkData)
            .then(() => alert('CREADO'))
            .catch(err => console.log(err))
    }

    const handleFileUpload = e => {

        const formData = new FormData()

        for (let i = 0; i < e.target.files.length; i++) {
            formData.append('imagesData', e.target.files[i])
        }

        uploadServices
            .uploadimages(formData)
            .then(({ data }) => {
                setParkData({ ...parkData, gallery: data.cloudinary_urls })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='NewCoasterForm'>
            <Form onSubmit={handleParkSubmit} encType='multipart/form-data'>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name="name" value={parkData.name} onChange={handleInputChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" name="description" value={parkData.description} onChange={handleInputChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="disabledSelect">Size park</Form.Label>
                    <Form.Select id="size" value={parkData.size} name="size" onChange={handleInputChange}>
                        <option>Disabled select</option>
                        <option>LARGE</option>
                        <option>MEDIUM</option>
                        <option>SMALL</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="disabledSelect">Crowdedness</Form.Label>
                    <Form.Select id="crowdedness" value={parkData.crowdedness} name="crowdedness" onChange={handleInputChange}>
                        <option>Disabled select</option>
                        <option>HIGH</option>
                        <option>MODERATE</option>
                        <option>LOW</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="number" placeholder="Rating" value={parkData.rating} name="rating" onChange={handleInputChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control type="file" multiple onChange={handleFileUpload} />
                </Form.Group>

                <ButtonOpen handleOpenStatus={handleOpenStatus} />

                {/* TODO: CREAR ESTADO DE CARGA PARA INHABILITAR BOTÓN DURANTE SUBIDA */}

                <div className="d-grid">
                    <Button variant="dark" type="submit">
                        New Park
                    </Button>
                </div>


            </Form>
        </div>
    )
}

export default NewParkForm;
