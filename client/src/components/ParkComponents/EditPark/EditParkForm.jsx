import React, { useContext, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import parkService from "../../../services/parks.service";
import uploadServices from '../../../services/upload.service';
import { MessageContext } from '../../../contexts/message.context';
import { useNavigate, useParams } from "react-router-dom";
import Loader from '../../Loader/Loader';

function EditParkForm() {
    const [parkData, setParkData] = useState({
        name: "",
        description: "",
        gallery: "",
        size: "",
        crowdedness: "",
        rating: 0,
        open: true,
    });

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { emitMessage } = useContext(MessageContext);

    const { park_id } = useParams();

    useEffect(() => {
        parkService
            .getParkDetails(park_id)
            .then((park) => {
                setParkData(park);
            })
            .catch((err) => console.error(err));
    }, [park_id]);

    const handleOpenStatus = (value) => {
        setParkData({
            ...parkData,
            open: value,
        });
    };

    const handleInputChange = (e) => {
        const { value, name } = e.currentTarget;
        setParkData({
            ...parkData,
            [name]: value,
        });
    };

    const handleParkSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        parkService
            .editPark(park_id, parkData)
            .then(() => {
                emitMessage('edit park');
                navigate(`/park/${park_id}`);
            })
            .catch((err) => console.error(err))
            .finally(() => {
                setIsLoading(false);
            });
    };

    const handleFileUpload = (e) => {
        const formData = new FormData();

        for (let i = 0; i < e.target.files.length; i++) {
            formData.append('imagesData', e.target.files[i]);
        }

        uploadServices
            .uploadimages(formData)
            .then(({ data }) => {
                setParkData({
                    ...parkData,
                    gallery: data.cloudinary_urls,
                });
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="EditParkForm">
            <Form onSubmit={handleParkSubmit} encType="multipart/form-data">
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name="name" value={parkData.name} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" name="description" value={parkData.description} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="size">Size park</Form.Label>
                    <Form.Select id="size" value={parkData.size} name="size" onChange={handleInputChange}>
                        <option value="LARGE">LARGE</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="SMALL">SMALL</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="crowdedness">Crowdedness</Form.Label>
                    <Form.Select id="crowdedness" value={parkData.crowdedness} name="crowdedness" onChange={handleInputChange}>
                        <option value="HIGH">HIGH</option>
                        <option value="MODERATE">MODERATE</option>
                        <option value="LOW">LOW</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="number" placeholder="Rating" value={parkData.rating} name="rating" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control type="file" multiple onChange={handleFileUpload} />
                </Form.Group>

                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="d-grid">
                        <Button variant="dark" type="submit">
                            Edit Park
                        </Button>
                    </div>
                )}
            </Form>
        </div>
    );
}

export default EditParkForm;
