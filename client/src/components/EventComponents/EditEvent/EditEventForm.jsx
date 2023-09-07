import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import eventsService from "../../../services/events.service";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";

const UpdateEventForm = () => {
    const [eventData, setEventData] = useState({
        title: "",
        description: "",
        cover: "",
        date: "",
        address: {
            street: "",
            number: 0,
            zipcode: 0,
            city: "",
            country: ""
        }
    });

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const { event_id } = useParams();

    useEffect(() => {
        eventsService
            .getEventDetails(event_id)
            .then((response) => {
                const { title, cover, description, date, address } = response.data;
                setEventData({ title, cover, description, date, address });
            })
            .catch((error) => {
                console.error("Error al cargar los datos del evento: ", error);
            });
    }, [event_id]);

    const handleInputChange = (e) => {
        const { value, name } = e.target;

        setEventData({
            ...eventData,
            [name]: value,
            address: {
                ...eventData.address,
                [name]: value,
            }
        });
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        eventsService
            .editEvent(event_id, eventData)
            .then(() => {
                console.log("Evento actualizado con éxito");
                navigate("/event/list");
            })
            .catch((err) => {
                console.error("Error al actualizar el evento: ", err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Form style={{ width: '900px' }} onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    value={eventData.title}
                    name="title"
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    value={eventData.description}
                    name="description"
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cover">
                <Form.Label>Cover (URL)</Form.Label>
                <Form.Control
                    type="text"
                    value={eventData.cover}
                    name="cover"
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control
                    type="date"
                    name="date"
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="street">
                        <Form.Label>Street</Form.Label>
                        <Form.Control
                            type="text"
                            value={eventData.address.street}
                            placeholder="Street"
                            name="street"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="number">
                        <Form.Label>Number</Form.Label>
                        <Form.Control
                            type="number"
                            min={0}
                            max={100}
                            value={eventData.address.number}
                            name="number"
                            onChange={handleInputChange} />
                        <Form.Text className="text-muted" />

                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            value={eventData.address.city}
                            name="city"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            type="text"
                            value={eventData.address.country}
                            name="country"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="zipcode">
                        <Form.Label>ZIP</Form.Label>
                        <Form.Control
                            type="text"
                            value={eventData.address.zipcode}
                            name="zipcode"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Col>
            </Row>

            {isLoading ? (
                <Loader />
            ) : (
                <Button className="buttonClick" variant="warning" style={{ width: '300px' }} type="submit">
                    Update Event
                </Button>
            )}
        </Form>
    );
};

export default UpdateEventForm;
