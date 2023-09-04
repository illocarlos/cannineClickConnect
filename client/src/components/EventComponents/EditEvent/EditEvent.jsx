import React, { useState, useEffect } from "react";
import eventsService from "./EventService";
import { Form, Button } from "react-bootstrap";

function EditEventComponent(props) {
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


    useEffect(() => {
        // Cargar los datos del evento existente cuando el componente se monta
        const loadEventDetails = async () => {
            try {
                const event_id = props.eventId;
                const response = await eventsService.getEventDetails(event_id);
                setEventData(response.data); // Actualiza los datos del evento en el estado
            } catch (error) {
                // Manejar errores en caso de que la solicitud falle
            }
        };

        loadEventDetails();
    }, [props.eventId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventData({
            ...eventData,
            [name]: value,
        });
    };

    const handleEditEvent = async () => {
        try {
            const event_id = props.eventId;
            await eventsService.editEvent(event_id, eventData);
            // El evento se ha editado con éxito
            // Puedes realizar alguna acción, como redirigir a la página de detalles del evento actualizado
        } catch (error) {
            // Manejar errores en caso de que la solicitud falle
        }
    };

    return (
        <div>
            <h2>Edit Event</h2>
            <Form>
                <Form.Group controlId="title">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={eventData.title}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="description"
                        value={eventData.description}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                {/* Otros campos del evento */}
                <Button variant="primary" onClick={handleEditEvent}>
                    Save
                </Button>
            </Form>
        </div>
    );

}

export default EditEventComponent;




