import { useState } from 'react';
import './NewPark.css'
import { Form, Button, Row, Col, ButtonGroup, ToggleButton } from 'react-bootstrap';
import ButtonOpen from './ButtonOpen';
import parkService from "../../services/parks.service";

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
        setParkData({
            ...parkData,
            [name]: value,
        })
    }
    const handleParkSubmit = e => {
        e.preventDefault()
        parkService
            .newPark(parkData)
            .then(respose => console.log(respose))
            .catch(err => console.log(err))




    }
    return (
        <div className='NewCoasterForm'>
            <Form onSubmit={handleParkSubmit}>
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

                <Form.Group className="mb-3" >
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="text" placeholder="Picture" value={parkData.gallery} name="gallery" onChange={handleInputChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <ButtonOpen handleOpenStatus={handleOpenStatus} />

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
